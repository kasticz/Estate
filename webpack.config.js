const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const minifyCss = require(`css-minimizer-webpack-plugin`)

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: "development",
    entry: {
        main: './index.js',
    },
    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, "dist")
    },
    resolve:{
        extensions:[".js",".json",".png","jpg",".svg"],
        alias:{
            "@models": path.resolve(__dirname, "src/models"),
            "@": path.resolve(__dirname, "src")
        }
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        },    
        minimizer:[
            "...",
            new minifyCss()
        ] 
        
    },
    devServer: {
        port: 4200,   
        static: {
            directory: path.join(__dirname, 'src'),
            watch: true,
        },
    },
    plugins:[
        new HtmlWebpackPlugin({ 
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns:[
                {
                    from:path.resolve(__dirname, "src/assets/"),
                    to:path.resolve(__dirname, "dist/assets"),
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
        })
    ],
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.sass$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            },
        ]
    },
}
