// path为node.js模块，用于处理文件路径
const path=require('path');
//自动输出index.htm文件
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports={
    entry:path.join(__dirname,'src/index.js'),//入口文件
    output:{
        path:path.resolve(__dirname,'dist'),//输出路径
        filename:'[name].[contenthash].js',//输出文件名
        clean:true, // 清除dist过期文件
        assetModuleFilename: 'images/[hash][ext][query]',//将图片输入到dist/images文件夹中
        //函数库如需支持script引用，则需要暴露出去一个变量名字，用于函数或变量的调用。
        library:{
            name:'fast',//变量名称
            type: 'umd',//兼容所有模式
        },
    },
    plugins:[
        //创建一个在内存中生成html页面的插件
        new HtmlWebpackPlugin({
            title:'模版文件',//文件title
            filename:'index.html',//文件名称,只有名称为index.html时才能直接访问
            template:path.join(__dirname,'public/index.html'),//指定模版页面
            inject:'head',//script插入位置 默认插入head内部底部，值为'body'时插入body内部底部
            minify:{ 
                removeAttributeQuotes:true//不压缩index.html文件
            },
            hash:false,//设置为true时会在script引用的js文件(output.filename)后附加webpack的hash值
            scriptLoading:'blocking',//是否异步加载 ‘blocking’|‘defer’
            // favicon: 'path/to/icopath.ico',//插入一个favicon
            // chunks: ['index','index2'],//当entry使用多个入口文件时，指定引入哪些特定的文件。
            // excludeChunks: ['index1.js'],//与chunks相反，排除指定文件
            cache:true //内容发生变化时生成新文件
        })
    ],
    module:{
        rules:[
            {
                // 图片预处理，5k以下使用64位，5k以上直接将图片导入dist/images文件夹中
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type:'asset',
                parser:{
                    dataUrlCondition:{
                        maxSize:3*1024
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }

}