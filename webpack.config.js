let path = require('path');

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
            { test: /\.s[ac]ss$/, use: ['style-loader','css-loader','sass-loader'] },
            { test: /\.css$/, use: ['style-loader','css-loader'] }
        ]
    }
};