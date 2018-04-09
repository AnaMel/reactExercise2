import React, { Component} from 'react';
import Box from './box';

import ItemsList from './itemsList';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [],
            boxedItems: []
        }
    }

    onDragOver(e) {
        e.preventDefault();
    }

    onDrop(e,boxId,boxAvailableSpace) {
        let id = e.dataTransfer.getData("id");
        let weight = e.dataTransfer.getData("weight");
        
        if((parseInt(boxAvailableSpace) - parseInt(weight))<0){
            console.log("not enough space")
        }
        else {
            let item = {
                box_id:boxId
            }
            firebase.database().ref('/items').child(id).update(item)
        }
    }

    // Pull list of boxes once boxList component mounted
    componentDidMount(){
        firebase.database().ref(`/boxes`).on('value', (snapshot) => {
            const boxes = snapshot.val();
            const copyOfBoxes = [];
            for (let key in boxes) {
                boxes[key].key = key;
                copyOfBoxes.push(boxes[key]);
            }
            this.setState({
                boxes: copyOfBoxes
            });
        });
        firebase.database().ref(`/items`).on('value', (snapshot) => {
            const items = snapshot.val();
            const copyOfBoxedItems = [];
            for (let key in items) {
                items[key].box_id!=null?
                (
                    items[key].key = key,
                    copyOfBoxedItems.push(items[key])
                )
                : null
            }
            this.setState({
                boxedItems: copyOfBoxedItems
            });
        });
    }

    render() {
        return(
            <div>
                {this.state.boxes.map((box) => <Box key={box.box_id} box={box} onDragOver={this.onDragOver} onDrop={this.onDrop} boxedItems={this.state.boxedItems} />)}
            </div>
        )
    }
}

export default BoxList;