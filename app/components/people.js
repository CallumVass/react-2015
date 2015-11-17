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
            <div className="ui items">
                {
                    this.state.people.map((person) => {
                        return (
                            <div key={person.id} className="item">
                                <div className="content">
                                    <Link className="header" to={`/${person.id}`}>{person.name}</Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default People;