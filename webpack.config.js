var webpack = require('webpack');

module.exports = {
    entry: {
        main: [
            "webpack/hot/only-dev-server",
            "./app/index.js"
        ]
    },
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }

            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
        ]
    }
};