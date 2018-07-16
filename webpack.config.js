let path = require('path');
let webpack = require('webpack');

let HelloWorldPlugin = require('./setup/plugins/hello-world');
let notifier = require('./setup/plugins/Notifier');
console.log(process.env.NODE_ENV==='production'?'.[chunkhash]':'');
module.exports = {
    entry: {
        app : './src/index.js',
        main : './src/main.js',
    },
    output: {
        filename: `[name]${process.env.NODE_ENV==='production'?'.[chunkhash]':''}.js`,
        path: path.resolve(__dirname , "dist")
    },
    watch: true,
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                exclude: /node_modules/,
                use: {
                    loader: 'jshint-loader',
                    options : {
                        esversion: 6
                    }
                }
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options : {
                            sourceMap : true
                        }
                    },
                    'sass-loader'
                ]
            },
            { test: /\.css$/, use: [
                'style-loader',
                 {
                     loader: "css-loader",
                     options : {
                         sourceMap : true
                     }
                 }
                ]
            }
        ]
    },
    plugins : [
        new webpack.LoaderOptionsPlugin({
            options : {
                jshint : {
                    esversion: 6
                }
            }
        }),
        new HelloWorldPlugin({setting: true}),
        new notifier()
    ],
    optimization: {
        minimize: true
    }

};