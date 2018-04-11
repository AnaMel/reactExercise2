import React, { Component} from 'react';
import User from './user';

// Component responsible for rendering list of users connected to the page
class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    // Once component mounted retrive list of active users from firebase
    componentDidMount() {
        const dbref = firebase.database().ref(`/users`);
        dbref.on('value', (snapshot) => {
            const users = snapshot.val();
            const copyOfUsers = [];
            for (let key in users) {
                users[key].key = key;
                copyOfUsers.push(users[key]);
            }
            this.setState({
                users: copyOfUsers
            });
        });
    }

    render() {
        return(
            <div>
                {this.state.users.map((user) => <User key={user.key} user={user}/>)}
            </div>
        )
    }
}

export default Users;