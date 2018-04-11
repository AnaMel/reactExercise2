import React from 'react';
import ReactDOM from 'react-dom';
import ItemsList from './components/itemsList';
import Users from './components/users';
import BoxList from './components/boxList';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDRKk7GtiVRpsN5Y2cqBbzuK9Gu8QvHqyQ",
  authDomain: "boxapp-e8add.firebaseapp.com",
  databaseURL: "https://boxapp-e8add.firebaseio.com",
  projectId: "boxapp-e8add",
  storageBucket: "",
  messagingSenderId: "264555086907"
};
firebase.initializeApp(config);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
  }

  // Once component mounted
  componentDidMount() {
    const dbref = firebase.database().ref('/users');
    const myUser = dbref.push();
    const connectedRef = firebase.database().ref(".info/connected");
    connectedRef.on("value", function(snap) {
      // validate if connection is established
      if (snap.val() === true) {
        // remove the user's record on the disconnect
        myUser.onDisconnect().remove();
        // then request user to enter their name
        myUser.set({
          name: prompt('Please enter your name')
        });
      } 
    });
    // retrieve list of items from firebase
    firebase.database().ref(`/items`).on('value', (snapshot) => {
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

  render() {
    return (
      <div>
        <Users />
        <section>
          <ItemsList items={this.state.items} itemPacked={false} />
          <BoxList />
        </section>
      </div>
    )
  }
}

export default DragAndDrop(App);
ReactDOM.render(<App />, document.getElementById('app'));
