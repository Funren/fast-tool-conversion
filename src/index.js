  // 开发模式下加载index.html文件，解决index.html无法热加载问题；
if (process.env.NODE_ENV !== 'production') {
   require('../public/index.html')
}  

import timeFormat from './timeFormat.js';
export {timeFormat}

