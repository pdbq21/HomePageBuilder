const webpack = require("webpack");
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {

    context: __dirname + "/src",

    entry: {
        app: "./app/index.js"
    },
    output: {
        path: "./publish",
        filename: "[name].bundle.js"
    },

    watch: NODE_ENV === 'development',

    watchOptions: {
        aggregateTimeout: 100
    },

    resolve: {
        modulesDirectories: ["node_modules"],
        extensions: ["", ".jsx", ".js"]
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader:  'babel-loader',
                plugins: ["transform-runtime"]
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader?name=/img/[name].[ext]"
            }
        ]
    },

    plugins: [
        /*new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
         warnings: false,
         drop_console: true
         }),*/
        new webpack.optimize.CommonsChunkPlugin({
            name: "common"
        })
    ]

};