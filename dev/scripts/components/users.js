import React, { Component} from 'react';
import User from './user';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
        this.guid = this.guid.bind(this);
        this.s4 = this.s4.bind(this);
    }

    //Function to generate unique GUID id for a new user object 
    guid() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
          this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }
      
    s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    componentDidMount() {
        const users =[];
        const user = {
          id: this.guid(),
          name: 'test'
        };
        users.push(user);
        this.setState({
            users
        })
    }

    render() {
        return(
            <div>
                {this.state.users.map((user) => <User key={user.id} user={user} />)}
            </div>
        )
    }
}

export default Users;