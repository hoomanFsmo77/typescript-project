const path=require('path')
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    devtool:'source-map',
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname,"./dist"),
        filename: "[name].[contenthash].js",
        assetModuleFilename: "assets/[name][ext]"
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpe?g)/,
                type: 'asset/resource'
            },
            {
                test: /\.(eot|ttf|woff|woff2)/,
                type: 'asset/inline'
            },
            {
                test: /\.(ts|js)?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-typescript"],
                    },
                },
            },
            {
                test: /\.ts$/,
                exclude: [/node_modules/],
                loader: 'ts-loader'
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:"css/[name].css"
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "index.html"
            // publicPath:"./dist/"
        })
    ]
}

export {}