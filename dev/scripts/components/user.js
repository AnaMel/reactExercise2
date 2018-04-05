import React, { Component} from 'react';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div key={this.props.user.id}>
                <p>{this.props.user.name}</p>
            </div>
        )
    }
}

export default User;