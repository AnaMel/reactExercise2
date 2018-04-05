import React, { Component} from 'react';
import Box from './box';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: []
        }
    }

    // Pull list of boxes once boxList component mounted
    componentDidMount(){
        const dbref = firebase.database().ref(`/boxes`);
        dbref.on('value', (snapshot) => {
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
    }

    render() {
        return(
            <div>
                {this.state.boxes.map((box) => <Box key={box.id} box={box}/>)}
            </div>
        )
    }
}

export default BoxList;