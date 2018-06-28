/**
 * Created by Punk.Li on 2017/3/30.
 */

var fn = function(){};
/*
 * 通过此种方式，对象继承关系保留在原型链中，可以通过 instanceof 的检查。
 * 而通过 $.extend() 的方式实现的“继承”，只是简单的原型链方法复制，无法通过 instanceof 的检查。
 * */
var
    inherit = function(cons,prototype){
    fn.prototype = prototype;
    cons.prototype  = new fn();
    fn.prototype = null;
    cons.prototype.constructor  = cons
}

var uniqueIdLibs = {}; // 唯一 ID 库

var isLocalStorage = window.localStorage?true:false;

var uniqueId = function(key){
    key = key || 'default';

    var id = uniqueIdLibs[key] ;
    uniqueIdLibs[key] = id = id == undefined ? 0 : ++id;
    return key + id;
}

var isArray = function(arg){
    if (!Array.isArray)
        return Object.prototype.toString.call(arg) === '[object Array]';
    return Array.isArray(arg);
}

/**
 * 日期格式化函数
 * @param  {Date}  dateTime 日期和时间
 * @param  {String}  format   日期的格式，形式类似于'yyyy-MM-dd H:i:s',
 * @param  {Boolean} pm       24小时制
 * @return {String}           格式化时间
 */
var dateFormat = function(dateTime, format,pm) {

    var dateTime = new Date(dateTime);

    var res = format,
        date = dateTime.getDate(),
        month = dateTime.getMonth() + 1,
        hours = dateTime.getHours(),
        minutes = dateTime.getMinutes(),
        secondes = dateTime.getSeconds();
    // 24小时制，转换小时制
    if(pm == true) {
        var str = hours > 12 ? 'pm' : 'am';
        hours = hours > 12 ? hours - 12 : hours;
        res = res.replace(/h+.i*.s*/i, '$& ' + str);
        // console.log(res);
    }


    // 以对象的形式返回日期的每一部分，key值用于进行正则匹配
    var o = {
        'y+': dateTime.getFullYear(),
        'm+': month < 10 ? "0" + month : month,
        'd+': date < 10 ? "0" + date : date,
        'h+': hours < 10 ? "0" + hours : hours,
        'i+': minutes < 10 ? "0" + minutes : minutes,
        's+': secondes < 10 ? "0" + secondes : secondes
    }


    for(var key in o) {
        var reg = new RegExp("(" + key + ")", 'i');
        if(reg.test(format)) {
            res = res.replace(RegExp.$1, o[key]);
        }
    }

    return res;
}

var setCookie = function(cookie_name,cookie_Key,expires,path){
    if(expires){
        var exp = new Date();
        exp.setTime(exp.getTime() + 7 * 24 * 3600 * 1000 );//过期时间 7天
        document.cookie =   cookie_name + "=" +  window.btoa(window.encodeURIComponent(cookie_Key)) + ";expires="+ exp.toGMTString() +";path=/";
    }else{
        document.cookie =   cookie_name + "=" +  window.btoa(window.encodeURIComponent(cookie_Key)) + ";path=/";
    }

}

var getCookie = function (cookie_name) {
    var results =  document.cookie.match('(^|;) ?' + cookie_name + '=([^;]*)(;|$)');
    if(results){
        try{
            var str =  window.decodeURIComponent(window.atob(results[2]));
            return str;
        }catch (e){
            return results[2];
        }

    }else{
        return "" ;
    }

    // var pattern = new RegExp(name + "=([^;]*)");
    // var matchArr = document.cookie.match(pattern);
    //
    // alert(matchArr[1]+ "---" +matchArr[0]  + "---" + matchArr[2]);
    // if(!matchArr || !matchArr[1]){
    //     return undefined;
    // } else {
    //     return matchArr[1]
    // }
};
var delCookie = function(cookie_name)//删除cookie
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    document.cookie= cookie_name + "="+""+";expires="+exp.toGMTString()+";path=/";
};
/**
 * 获取localStorage
 * @param keys
 * @param value
 * @returns {null}
 */
var getStorage = function(keys,value) {
    if (isLocalStorage && window.localStorage.keys) {
        var currentData = JSON.parse(window.localStorage.keys);
        return currentData;
    } else {
        return null;
    }
};

/**
 *
 * 设置localStorage
 * @param keys
 * @param value
 * @returns {null}
 */
var setStorage = function(keys,value){
    if(isLocalStorage ) {
        if (window.localStorage.keys) {
            var currentData = JSON.parse(window.localStorage.keys);
            for (var index = 0; index < currentData.length; index++) {
                if (value == currentData[index]) {
                    return;
                }
            }
            currentData.push(value);
            window.localStorage.keys = JSON.stringify(currentData);
        } else {
            window.localStorage.keys = JSON.stringify([value]);
        }
    }
};

var base64Encrypt =  function(str){
    return window.btoa(window.encodeURIComponent(str));
}

var base64Decrypt = function(str){
    var bakStr = "";
    try{
        bakStr = window.decodeURIComponent(window.atob(str));
    } catch (e){
        console.warn(e);
    }

    return bakStr;
}

/*
千分位
 */
var thousandPoints = function(s,n){
    n = n >= 0 && n <= 20 ? n : 2;
    s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + '';
    var l = s.split('.') [0].split('').reverse(),
        r = s.split('.') [1];
    var  t = '';
    for (var i = 0; i < l.length; i++)
    {
        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? ',' : '');
    }

    var decimal = n == 0 ? '' :'.' + r
    return t.split('').reverse().join('') + decimal ;
};

//替换空格
var replaceSpaceText = function(testStr,replaceStr){
    var resultStr =  resultStr = testStr.replace(/[ ]/g, replaceStr);
        resultStr.replace(/\ +/g, replaceStr); //替换空格

    return resultStr;
};

//删除空格
var deleteSpaceText = function(testStr){
    var resultStr = testStr.replace(/\ +/g, ""); //去掉空格
    resultStr = resultStr.replace(/[ ]/g, "");    //去掉空格
    resultStr = resultStr.replace(/[\r\n]/g, ""); //去掉回车换行
    return resultStr;
};

/**
 * 显示省略号
 * @param originStr
 * @param start 开始*的下标位置
 * @param length *的长度
 * @returns {string}
 */
var toPhoneEllipsis  = function(originStr,start){
    var replaceStr = "****";
    return originStr.substring(0,start-1)+replaceStr + originStr.substring(start + 3,originStr.length);
}

var toSerializeObject = function(serializeArray){
  var serializeObject = {};

  serializeArray.forEach(function(item,index){

    if(item.value == "" && filter){

    } else {
      serializeObject[item.name] = item.value != "" ? item.value : null ;
    }
  });

  return serializeObject;
}




export  default {
    inherit: inherit,                //  对象继承
    uniqueId: uniqueId,              // 获取 唯一 id，带有指定前缀
    isArray: isArray,                // 判断是否为 array
    dateFormat: dateFormat,          // 获取指定格式的时间
    setCookie: setCookie,            // 设置 cookie
    getCookie: getCookie,            // 获取 cookie
    delCookie:delCookie,
    base64Encrypt:base64Encrypt,     // base64 + encodeURIComponent 加密
    base64Decrypt:base64Decrypt,      // decodeURIComponent + base64 解密
    thousandPoints:thousandPoints,     // 千分位
    deleteSpaceText:deleteSpaceText,  //删除空格
    replaceSpaceText:replaceSpaceText,
    setStorage:getStorage,  //删除空格
    getStorage:getStorage,
    toPhoneEllipsis:toPhoneEllipsis,
  toSerializeObject:toSerializeObject
}
