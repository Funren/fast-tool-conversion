// path为node.js模块，用于处理文件路径
const path=require('path');
// 合并配置文件
const {merge}=require('webpack-merge');
const common=require('./webpack.common.js');

module.exports=merge(common,{
    mode:'development',
    devtool: 'inline-source-map',
    module:{
      rules: [
        //允许以字符串方式导入文件
        {
          test: /\.html$/,
          use: 'raw-loader'
        },
        //css-loader负责识别import/require引入的模块
        //postcss-loader添加css前缀，配置在postcss.config.js中
        {
          test: /\.(sa|sc|c)ss$/,
          use:['style-loader','css-loader','sass-loader','postcss-loader']

        },
      ]
    },
    devServer:{
       contentBase:path.resolve(__dirname,'public'),//index.html内容来源
       hot:true, //模块热更新
    },
    //原因：解决browserslist配置后不能自动刷新浏览器问题；
    target:'web'
})