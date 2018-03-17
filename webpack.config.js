let webpack = require('webpack');
let path = require('path');

let BUILD_DIR = path.resolve(__dirname, 'public/javascripts/');
let APP_DIR = path.resolve(__dirname, 'jsx');

module.exports = {
    entry: {
        schedule: APP_DIR + '/schedule.jsx',
        tictac: APP_DIR + '/tictac.jsx',
        demo: APP_DIR + '/demo.jsx',
        vendor: [
            'react',
            'react-dom'
        ]
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                include: APP_DIR,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }

            // {
            //     test: /\.css$/,
            //     loader: 'style-loader',
            //     exclude: '/public/stylesheets'
            // },
            // {
            //     test: /\.css$/,
            //     loader: 'css-loader',
            //     query: {
            //         modules: true,
            //         localIdentName: '[name]__[local]___[hash:base64:5]'
            //     }
            // }

        ]
    },
    plugins: [
        new webpack.OldWatchingPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')

        // new webpack.DefinePlugin({
        //     'process.env': {
        //         'NODE_ENV': JSON.stringify('production')
        //     }
        // }),
        // new webpack.optimize.DedupePlugin(),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        // new webpack.optimize.AggressiveMergingPlugin()

    ],
    debug: true,
    devtool: '#eval-source-map'
};

