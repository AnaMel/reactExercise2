import React, { Component} from 'react';

// Functional component responsible for rendering user information (id, name)
const User = (props) => {
        return(
            <div key={this.props.user.id}>
                <p>{this.props.user.name}</p>
            </div>
        )
}

export default User;