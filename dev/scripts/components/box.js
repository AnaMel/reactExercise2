import React, { Component} from 'react';

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <p>box name: {this.props.box.name}</p>
                <p>total weight: {this.props.box.total_allowed_weight}</p>
            </div>
        )
    }
}

export default Box;