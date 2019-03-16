// entry point of app, output
// webpack.js.org for documentation

// path to current location because output path has to be absolute
// console.log(__dirname);
// returns // /Users/ko08125/Desktop/react-course-projects/indecision-app

// Gives access to path.join from node
const path = require('path');

// console.log(path.join(__dirname, 'public'));
// returns /Users/ko08125/Desktop/react-course-projects/indecision-app/public

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};