import React, { Component} from 'react';
import Box from './box';
import ItemsList from './itemsList';

// Component responsible for rendering list of boxes
class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [],
            boxedItems: []
        }
    }
    // Function to prevent page reload when user drags an item over a box component
    onDragOver(e) {
        e.preventDefault();
    }

    // Function triggered wher user drops an item into a box component
    onDrop(e,boxId,boxAvailableSpace) {
        // retrieve id of the dropped item
        let id = e.dataTransfer.getData("id");
        // retrieve weight of the dropped item
        let weight = e.dataTransfer.getData("weight");
        // if weight of the dropped item exceeds available space
        if((parseInt(boxAvailableSpace) - parseInt(weight))<0){
            // then alert the user
            alert("Not enough space in the box.");
        }
        else {
            // else update item's box_id and push the update to firebase
            let item = {box_id:boxId}
            firebase.database().ref('/items').child(id).update(item)
        }
    }

    // Pull list of boxes and items from Firebase once boxList component mounted
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
            <div className="boxes">
                {this.state.boxes.map((box) => <Box key={box.box_id} box={box} onDragOver={this.onDragOver} onDrop={this.onDrop} boxedItems={this.state.boxedItems} />)}
            </div>
        )
    }
}

export default BoxList;