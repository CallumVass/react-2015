import React from 'react';
import aja from 'aja';

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
                            return (<li>{person.name}</li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default People;