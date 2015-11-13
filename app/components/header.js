import React from 'react';

class Header extends React.Component {
    constructor()
    {
        super();

        this.state = {
            text: 'Dashboard'
        }
    }

    render() {
        return (
            <h1>{this.state.text}</h1>
        )
    }
}

export default Header;