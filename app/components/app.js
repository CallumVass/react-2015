import React from 'react';

class App extends React.Component {
    constructor()
    {
        super();
    }

    render() {
        return (
            <div className="ui container">
                <h1 className="ui header">People</h1>
                {this.props.children}
            </div>
        )
    }
}

export default App;