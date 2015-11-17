import React from 'react';

class Person extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <li>{this.props.name}</li>
        )
    }
}

export default Person;