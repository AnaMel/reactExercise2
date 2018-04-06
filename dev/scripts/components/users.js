import React, { Component} from 'react';
import User from './user';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }


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
                {this.state.users.map((user) => <User user={user}/>)}
            </div>
        )
    }
}

export default Users;