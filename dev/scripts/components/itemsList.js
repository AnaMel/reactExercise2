import React, { Component} from 'react';
import Item from './item';

// Component responsible for rendering list of items (global list and list of items packed in boxes)
class ItemsList extends Component {
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    // Create a function to capture data about the item once user starts dragging it
    onDragStart(e, id, weight) {
        console.log("dragstart", id); 
        e.dataTransfer.setData("id", id);
        e.dataTransfer.setData("weight", weight);
    }
    // Create a function to handle 'remove' icon click event
    handleClick(e, id) {
        // Set box_id property value to null and update in Firebase
        let boxId={box_id:null}
        firebase.database().ref('/items').child(id).update(boxId);
    }
    render() {
        return(
            <div>
                {this.props.items.map((item) => <Item key={item.id} item={item} onDragStart={this.onDragStart} handleClick={this.handleClick} itemPacked={this.props.itemPacked} />)}
            </div>
        )
    }
}

export default ItemsList;