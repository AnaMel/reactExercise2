import React, { Component} from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div className={this.props.item.box_id?"itemNotDraggable":"itemContainer"}>
                <p>{this.props.item.name}</p>
                <p>{this.props.item.weight}</p>
            </div>)
    }
}

export default Item;