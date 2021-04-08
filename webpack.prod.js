// path为node.js模块，用于处理文件路径
const path=require('path');
// 合并配置文件
const {merge}=require('webpack-merge');
const common=require('./webpack.common.js');
// 单独打包CSS文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");



module.exports=merge(common,{
    mode:'production',
    plugins:[
        //css单独打包
        new MiniCssExtractPlugin ({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].css',
        }),
    ],
    module:{
        rules:[
            //css-loader负责识别import/require引入的模块
            //MiniCssExtractPlugin.loader用于将css分离打包
            //postcss-loader添加css前缀，配置在postcss.config.js中
            {
                test: /\.(sa|sc|c)ss$/,
                use:[ MiniCssExtractPlugin.loader,'css-loader','sass-loader','postcss-loader']

            },
        ]
    }
})