import React, { Component} from 'react';

// Functional component responsible for rendering user information (id, name)
const User = (props) => {
        return(
            <div key={props.user.id}>
                <p>{props.user.name!==''?props.user.name:'Anonymous User'}</p>
            </div>
        )
}

export default User;