import React from 'react';
import aja from 'aja';
import {Link} from 'react-router';

import Person from './person';

class People extends React.Component {
    constructor() {
        super();

        this.state = {
            people: []
        }
    }

    componentDidMount() {
        aja()
            .url("http://jsonplaceholder.typicode.com/users")
            .on('success', (result) => {
                this.setState({people: result});
            })
            .go();
    }

    render() {
        return (
            <div>
                {
                    this.state.people.map((person) => {
                        return (
                            <div key={person.id}>
                                <Link to={`/${person.id}`}>{person.name}</Link>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default People;