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
    this.state ={
    }
  }

  render() {
    return (
      <div>
        <Users />
        <ItemsList />
        <BoxList />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
