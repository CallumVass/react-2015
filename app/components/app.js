import React from 'react';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import AppBar from 'material-ui/lib/app-bar';
import MyTheme from '../themes/custom-theme';


class App extends React.Component {
    constructor() {
        super();
    }

    static childContextTypes = {
        muiTheme: React.PropTypes.object
    };

    getChildContext() {
        return {
            muiTheme: ThemeManager.getMuiTheme(MyTheme)
        };
    }

    render() {
        return (
            <div>

                <AppBar title="People" showMenuIconButton={false}/>
                {this.props.children}

            </div>
        )
    }
}

export default App;