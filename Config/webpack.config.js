/**
 * Created by Alex Redmon on 8/22/2016.
 */
var webpack = require('webpack');
var path= require('path');
const BUILD_DIR = path.resolve('src/client/public');
const APP_DIR = path.resolve('src/client/app/index.jsx');
var config ={
    entry:APP_DIR,
    output:{
        path:BUILD_DIR,
        filename:'bundle.js'
    },
    watch: true,
    module:{
        loaders:[
            {
                test : /\.jsx?/,
                include:APP_DIR,
                loader:'babel-loader',
                query:{
                    presets: ['es2015', 'react']
                }
            }


        ]
    }


};
module.exports = config;