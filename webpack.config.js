var webpack = require('webpack');
module.exports = {
    entry: "./public/index.js",
    output: {
        path: __dirname+"/public/bundle",
        filename: "bundle.js",
        publicPath: "http://localhost:8080/bundle/"
    },
    module: {
        loaders: [
            // the url-loader uses DataUrls.
            // the file-loader emits files.
            {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
            { test: /\.jpg$/, loader: "file" },
            { test: /\.png$/, loader: "url?limit=10000&mimetype=image/png" },
            {
                test: /\.js$/,
                loader: 'babel',
                include: /public/,
                query: {
                    presets: ['es2015']
                }
            },
            { 
                test: /\.css$/,
                loader: "style!css!",
                include: /public/,
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.html$/,
                loader: 'raw',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
       })
    ]
};