import React, { Component} from 'react';

// Functional component responsible for rendering user information (id, name)
const User = (props) => {
        return(
            <div key={props.user.id}>
                <p>{props.user.name}</p>
            </div>
        )
}

export default User;