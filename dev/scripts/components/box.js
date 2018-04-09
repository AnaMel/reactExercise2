import React, { Component} from 'react';
import ItemsList from './itemsList';

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // availableWeight: this.props.total_allowed_weight
        }
    }

    returnItems(itemsInBox) {
        this.setState({items:itemsInBox})
    }

    render() {
        let itemsInBox=[]
        this.props.boxedItems.map((item) => {
            item.box_id === this.props.box.box_id?
            itemsInBox.push(item)
            :null
        })
        return(
            <div className="box" onDragOver={(e) => this.props.onDragOver(e)} onDrop={(e) => this.props.onDrop(e, this.props.box.box_id, this.props.box.total_allowed_weight)}>
                <p>box name: {this.props.box.name}</p>
                <p>total weight: {this.props.box.total_allowed_weight}</p>
                <div>
                    {<ItemsList items={itemsInBox} />}
                </div>
            </div>
        )
    }
}

export default Box;