import React from 'react';
import People from './people';

class App extends React.Component {
    constructor()
    {
        super();
    }

    render() {
        return (
            <div>
                <h1>People</h1>
                {this.props.children}
            </div>
        )
    }
}

export default App;