let path = require('path');

module.exports = {
    entry: ['./src/scn.js'],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname , "dist")
    },
    watch: true
};