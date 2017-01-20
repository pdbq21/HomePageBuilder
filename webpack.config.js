var path = require('path');
const webpack = require("webpack");
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {

    context: __dirname + "/src",

    entry: [
        'webpack-hot-middleware/client',
        "./app/index.js"

    ],
    output: {
    path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    publicPath: '/publish/'
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
                loaders:  ['react-hot', 'babel-loader'],
                plugins: ["transform-runtime"],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
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

        new webpack.HotModuleReplacementPlugin(),
        /*new webpack.optimize.CommonsChunkPlugin({
            name: "common"
        })*/
    ]

};