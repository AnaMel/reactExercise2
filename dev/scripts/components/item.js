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
            <div className={(this.props.item.box_id&&this.props.itemPacked)?"itemNotDraggable":"itemContainer"} onDragStart={(e) => this.props.onDragStart(e, this.props.item.id, this.props.item.weight)} draggable={this.props.item.box_id&&!this.props.itemPacked?false:true}  >
                <p>{this.props.item.name}</p>
                <p>{this.props.item.weight}</p>
                {this.props.itemPacked?
                <a href="#" onClick={(event) => this.props.handleClick(event, this.props.item.id)}><i className="fas fa-times eventFormControl link__black"></i></a>
                :null
                }
            </div>)
    }
}

export default Item;