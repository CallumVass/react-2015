import React from 'react';
import aja from 'aja';
import mui from 'material-ui';

let { Card, CardTitle, CardText, AppBar } = mui;

class Person extends React.Component {
    constructor() {
        super();
        this.state = {
            person: {},
            posts: []
        }
    }

    componentDidMount() {
        aja()
            .url(`http://jsonplaceholder.typicode.com/users/${this.props.params.id}`)
            .on('success', (result) => {
                this.setState({person: result});
            })
            .go();
        aja()
            .url(`http://jsonplaceholder.typicode.com/posts?userId=${this.props.params.id}`)
            .on('success', (result) => {
                this.setState({posts: result});
            })
            .go();
    }

    render() {
        return (
            <div>
                <AppBar title={this.state.person.name} showMenuIconButton={false}/>

                {
                    this.state.posts.map((post) => {

                        return (
                            <Card key={post.id}>
                                <CardTitle
                                    title={post.title}/>
                                <CardText>
                                    {post.body}
                                </CardText>
                            </Card>
                        )
                    })
                }

            </div>
        )
    }
}

export default Person;