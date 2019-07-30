const path = require('path');

module.exports = {
    // entry: './src/index.js',
    entry: ["babel-polyfill", "./src/index.js"],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
            },
            {
                test: /\.css$/, exclude: /node_modules/, use: [
                    { loader: "style-loader"},
                    { loader: "css-loader"}
                ]
            }
            // {
            //     test: /\.css$/, exclude: /node_modules/, use: [
            //         { loader: "style-loader"},
            //         { loader: "file-loader"}
            //     ]
            // }
        ]
    },
    devServer: {
        contentBase: './dist',
        port: 9000
    }
};