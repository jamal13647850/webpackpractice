let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: ['./src/index.js'],
    output: {
        filename: "bundle.js",
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
        })
    ]

};