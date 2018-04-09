import React, { Component} from 'react';
import ItemsList from './itemsList';

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    returnItems(itemsInBox) {
        this.setState({items:itemsInBox})
    }

    render() {
        let itemsInBox=[];
        let itemsWeight = '';
        this.props.boxedItems.map((item) => {
            item.box_id === this.props.box.box_id?
            (itemsInBox.push(item),
            itemsWeight=(parseInt(itemsWeight)||0) + parseInt(item.weight))
            :null
        })
        let remainingWeight=parseInt(this.props.box.total_allowed_weight) - (parseInt(itemsWeight)||0);
        return(
            <div className="box" onDragOver={(e) => this.props.onDragOver(e)} onDrop={(e) => this.props.onDrop(e, this.props.box.box_id,remainingWeight)}>
                <p>box name: {this.props.box.name}</p>
                <p>total weight: {this.props.box.total_allowed_weight}</p>
                <p>remaining space: {
                    parseInt(this.props.box.total_allowed_weight) - (parseInt(itemsWeight)||0)
                    }
                </p>
                <div>
                    {<ItemsList items={itemsInBox} />}
                </div>
            </div>
        )
    }
}

export default Box;