import React, { Component} from 'react';
import ItemsList from './itemsList';

// Component responsible for rendering box information (box name, total allowed weight, remaining space, list of items in the box)
class Box extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // create array of items packed in the box based on item's box_id value
        // and calculate total weight of all items in the box
        let itemsInBox=[];
        let itemsWeight = '';
        this.props.boxedItems.map((item) => {
            // if item's box_id value corresponds to the box_id
            item.box_id === this.props.box.box_id?
            // then push the item record in array
            (itemsInBox.push(item),
            // add item's weight to the occupied weight of the box
            itemsWeight=(parseInt(itemsWeight)||0) + parseInt(item.weight))
            // else do nothing
            :null
        })
        // calculate remaining space by deducting total weight of items in the box from total allowed weight of the box
        let remainingWeight=parseInt(this.props.box.total_allowed_weight) - (parseInt(itemsWeight)||0);
        return(
            <div className="box" onDragOver={(e) => this.props.onDragOver(e)} onDrop={(e) => this.props.onDrop(e, this.props.box.box_id,remainingWeight)}>
                <p>box name: {this.props.box.name}</p>
                <p>total weight: {this.props.box.total_allowed_weight}</p>
                <p>remaining space: {parseInt(this.props.box.total_allowed_weight) - (parseInt(itemsWeight)||0)}</p>
                <div>
                    {/* Use ItemsList component to render list of items in the box */}
                    {<ItemsList items={itemsInBox} itemPacked={true} />}
                </div>
            </div>
        )
    }
}

export default Box;