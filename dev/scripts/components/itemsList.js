import React, { Component} from 'react';
import Item from './item';

class ItemsList extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     items: []
        // }
        this.handleClick=this.handleClick.bind(this);
    }

    onDragStart(e, id, weight) {
        console.log("dragstart", id); 
        e.dataTransfer.setData("id", id);
        e.dataTransfer.setData("weight", weight);

    }

    handleClick(e, id) {
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

    // Pull list of items once itemList component mounted
    componentDidMount(){
        // const dbref = firebase.database().ref(`/items`);
        // dbref.on('value', (snapshot) => {
        //     const items = snapshot.val();
        //     const copyOfItems = [];
        //     for (let key in items) {
        //         items[key].key = key;
        //         copyOfItems.push(items[key]);
        //     }
        //     this.setState({
        //         items: copyOfItems  
        //     });
        // });
    }
}

export default ItemsList;