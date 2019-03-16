// entry point of app, output
// webpack.js.org for documentation

// path to current location because output path has to be absolute
// console.log(__dirname);
// returns // /Users/ko08125/Desktop/react-course-projects/indecision-app

// Gives access to path.join from node
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// console.log(path.join(__dirname, 'public'));
// returns /Users/ko08125/Desktop/react-course-projects/indecision-app/public

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');
    return {
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
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        devtool: isProduction ? 'source-map': 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            publicPath: '/dist/'
        },
        plugins: [
            CSSExtract
        ]
    }
};