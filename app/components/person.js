import React from 'react';

class Person extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <li>{this.props.name}</li>
            </div>
        )
    }
}

export default Person;