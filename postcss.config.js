//postcss.config.js
//动态加载autoprefixer,传入postcss-loader用于生成不同浏览器前缀
module.exports = {
   plugins: [
     require('autoprefixer')
   ]
 }