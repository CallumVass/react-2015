import React from 'react';
import $ from 'jquery';
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
        $.when(
            $.ajax(`http://jsonplaceholder.typicode.com/users/${this.props.params.id}`),
            $.ajax(`http://jsonplaceholder.typicode.com/posts?userId=${this.props.params.id}`)
        ).done((person, posts) => {
            this.setState({
                person: person[0],
                posts: posts[0]
            });
        });
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