import React, { Component} from 'react';
import Item from './item';

class ItemsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    render() {
        return(
            <div>
                {this.state.items.map((item) => <Item key={item.id} item={item}/>)}
            </div>
        )
    }

    // Pull list of items once itemList component mounted
    componentDidMount(){
        const dbref = firebase.database().ref(`/items`);
        dbref.on('value', (snapshot) => {
            const items = snapshot.val();
            const copyOfItems = [];
            for (let key in items) {
                items[key].key = key;
                copyOfItems.push(items[key]);
            }
            this.setState({
                items: copyOfItems
            });
        });
    }
}

export default ItemsList;