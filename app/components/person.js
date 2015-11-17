import React from 'react';
import aja from 'aja';

class Person extends React.Component {
    constructor() {
        super();
        this.state = {
            person: {}
        }
    }

    componentDidMount() {
        aja()
            .url(`http://jsonplaceholder.typicode.com/users/${this.props.params.id}`)
            .on('success', (result) => {
                this.setState({person: result});
            })
            .go();
    }

    render() {
        return (
            <div>
                {this.state.person.name}
            </div>
        )
    }
}

export default Person;