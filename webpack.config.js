module.exports = {
    entry: "./app/index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
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