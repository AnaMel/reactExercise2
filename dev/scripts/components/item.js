import React, { Component} from 'react';
import { Drag } from 'simple-react-dnd';


class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div className={this.props.item.box_id?"itemNotDraggable":"itemContainer"} onDragStart={(e) => this.props.onDragStart(e, this.props.item.id, this.props.item.weight)} draggable >
                <p>{this.props.item.name}</p>
                <p>{this.props.item.weight}</p>
                <a href="#" onClick={(event) => this.props.handleClick(event, this.props.item.id)}><i className="fas fa-times eventFormControl link__black"></i></a>
            </div>)
    }
}

export default Item;