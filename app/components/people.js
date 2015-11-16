import React from 'react';
import aja from 'aja';

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
                <ul>
                    {
                        this.state.people.map((person) => {
                            return <Person key={person.id} name={person.name} />
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default People;