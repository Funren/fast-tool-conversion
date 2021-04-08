/**
 * Unix服务器时间戳格式转换
 * @param {number} time 服务器时间戳
 * @param {string} all  all=='all'返回年-月-日-时-分-秒,否则返回年-月-日
 */

 function timeFormat(time,all){
    if(time){
        let times=time;
        let date=new Date(times*1000),
        y=date.getFullYear(),
        m=date.getMonth()+1,
        d=date.getDate();
    
        if(all=='all'){
            let h=date.getHours(),
            minute=date.getMinutes(),
            second=date.getSeconds();
            minute = minute < 10 ? ('0' + minute) : minute;
            second = second < 10 ? ('0' + second) : second;
            return y + '-' + (m < 10 ? "0" + m : m) + '-' + (d < 10 ? "0" + d : d) + ' ' + h + ':' + minute + ':' + second;
        }else{
            return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d);
        }
    }else{
        console.error('未传入time值')
    }
}

export default timeFormat;
