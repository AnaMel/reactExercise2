import React, { Component} from 'react';

// Functional component responsible for rendering item information (name, weight)
const Item = (props) => {
    return(
        <div className={(props.item.box_id&&props.itemPacked)?"itemNotDraggable":"itemContainer"} onDragStart={(e) => props.onDragStart(e, props.item.id, props.item.weight)} draggable={props.item.box_id&&!props.itemPacked?false:true}  >
            <p>{props.item.name}</p>
            <p>{props.item.weight}</p>
            {/* Display 'remove' icon based on whether item is rendered in a global list of items or in a box */}
            {props.itemPacked?
            <a href="#" onClick={(event) => props.handleClick(event, props.item.id)}><i className="fas fa-times eventFormControl link__black"></i></a>
            :null}
        </div>
    )
}

export default Item;