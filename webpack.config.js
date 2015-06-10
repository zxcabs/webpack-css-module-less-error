/**
 * @author "Evgeny Reznichenko" <kusakyky@gmail.com>
 */
var
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path');

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'index.js',
        path: path.resolve('./dist')
    },

    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?module&localIdentName=css_[name]__[local]___[hash:base64:5]')
            },
            // error Error: Cannot resolve module 'cat.png'
            {
                test: /\.less/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?module&localIdentName=less_[name]__[local]___[hash:base64:5]!less')
            },
            {
                test: /\.png$/,
                loader: 'url-loader?limit=10000'
            }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules']
    },

    plugins: [
        new ExtractTextPlugin('style.css', { allChunks: true }),
        new HtmlWebpackPlugin()
    ]
};
