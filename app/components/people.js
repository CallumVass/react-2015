import React from 'react';
import aja from 'aja';
import {Link} from 'react-router';
import mui from 'material-ui';

let { Card, CardHeader, CardActions, FlatButton, Avatar, AppBar } = mui;

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
                <AppBar title="People" showMenuIconButton={false}/>
                {
                    this.state.people.map((person) => {

                        var firstCharacter = person.name.substring(0, 1);

                        return (
                            <Card key={person.id}>
                                <CardHeader
                                    title={person.name}
                                    subtitle={person.email}
                                    avatar={<Avatar>{firstCharacter}</Avatar>}/>
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