const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


module.exports = {
    // entry: './src/index.js',
    entry: {
        // entry: ["babel-polyfill", "./src/index.js"], empacota tudo dentro do mesmo bundle
        babelpolyfill: "babel-polyfill",
        index: "./src/index.js",        
        indexControllers: "./src/controllers/IndexControllers.js",
        portfolioController: "./src/controllers/PortfolioController.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist/bundle'),
        filename: '[name].bundle.js'
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    output: {
                        comments: false // Para remover os comentarios do bundle na hora de compactar
                    }
                }
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            //Options similar to the same  options in webpackOptions.output
            //both options are optional
            filename: "css.css",
            // chunkFilename: "[id].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
            },
            //Parte do código onde é feito a referencia do style direto no head do HTML
            {
                test: /\.css$/, exclude: /node_modules/, use: [
                    { loader: MiniCssExtractPlugin.loader }, //Aqui era usado o style-loader
                    { loader: "css-loader" }
                ]
            },

            // Aqui esta sendo comentado porque a extract plugin vai empacotar tudo em um unico arquivo
            // {
            //     test: /\.css$/, exclude: /node_modules/, use: [
            //         { loader: "style-loader/url"},
            //         { loader: "file-loader"}
            //     ]
            // },

            //Parte do código referente somene ao encapsulamento do SASS
            // {
            //     test: /\.scss$/, exclude: /node_modules/, use: [
            //         "style-loader", //create style nodes from 35 strings
            //         "css-loader", //translate css into commomJS
            //         "sass-loader", //compile Sass to css, using Node Sass by default
            //     ]
            // }
            {
                test: /\.(scss)$/, exclude: /node_modules/, use: [
                    {
                        loader: MiniCssExtractPlugin.loader, //Inject CSS to page - Alterado o style-loader no parametro
                    },
                    {
                        loader: 'css-loader', //Translate CSS into CommonJS modules
                    },
                    {
                        loader: 'postcss-loader', //Run post css actions
                        options: {
                            plugins: function () { //post css plugins, can be exported to postcss.config.js
                                return [
                                    require('precss'),
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    {
                        loader: 'sass-loader' //Compile Sass to CSS
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        port: 9000
    }
};