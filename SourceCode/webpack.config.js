const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    optimization: {
        minimizer: [new UglifyJsPlugin()]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        historyApiFallback: true,
        hot: true,
        open: true
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },{
                test: /(\.svg|\.mp3|\.png|\.jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                        name: "[name].[ext]"
                        }
                    }
                ]
            },{
                test: /\.s?css$/,
                use: ['style-loader','css-loader','sass-loader']
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: path.resolve(__dirname, './dist/index.html'),
        })
    ]
};