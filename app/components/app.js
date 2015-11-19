import React from 'react';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
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
                {this.props.children}
            </div>
        )
    }
}

export default App;