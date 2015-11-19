import React from 'react';
import aja from 'aja';
import {Link} from 'react-router';
import { Card, CardTitle, CardActions } from 'material-ui/lib/card';
import FlatButton from 'material-ui/lib/flat-button';
import Avatar from 'material-ui/lib/avatar';

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
                            <Card key={person.id}>
                                <CardTitle title={person.name} subtitle="Subtitle"/>
                                <CardActions>
                                    <FlatButton label="Details"
                                                linkButton={true}
                                                containerElement={<Link to={`/${person.id}`}/>}/>
                                </CardActions>
                            </Card>
                        )
                    })
                }
            </div>
        )
    }
}

export default People;