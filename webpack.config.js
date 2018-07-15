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
            { test : /\.js$/,enforce: 'pre',exclude : /node_modules/, use :['jshint-loader']},
            { test: /\.s[ac]ss$/, use: ['style-loader','css-loader','sass-loader'] },
            { test: /\.css$/, use: ['style-loader','css-loader'] }
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