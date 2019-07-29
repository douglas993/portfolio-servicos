const path = require('path');

module.exports = {
    // entry: './src/index.js',
    entry: ["babel-polyfill", "./src/index.js"],
    output: {
        path: path.resolve(__dirname, 'distribuicao'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, exclude: /node_modules/, loader: "babel-loader",
            }
        ]
    },
    devServer: {
        contentBase: './distribuicao',
        port: 9000
    }
};