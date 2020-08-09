const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "script.js",
        publicPath: "dist/"
    },
    devServer: {
        port: 3000
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(["css-loader", "sass-loader"])
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".js"]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new CopyWebpackPlugin([{ from: "images", to: "images" }]),
        new CleanWebpackPlugin(),
    ]
};

module.exports = config;
