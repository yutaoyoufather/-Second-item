'use strict';

/**
 * 防抖
 * @param {Function} func 
 * @param {Number} delay 
 * @returns function
 */
  function debounce(func,delay) {
  var timer = null;
	// 这里返回的函数是每次用户实际调用的防抖函数
	return function () {
		// 如果已经设定过计时器了就清除掉上一次的定时器
		if(timer) { clearTimeout(timer); }
		var that = this;
	    var args = arguments;
	    // 开始一个新的定时器, 延迟执行用户传入的方法
	    timer = setTimeout(function (){
	      func.apply(that, args);
	    },delay);
	}
}
/**
 * @param {Number} time 
 * @param {Function} fun 
 * @returns function();
 * 
 */
function throttle(time, fun) {
  var flag = 0;
  return function () {
      var now = +new Date().valueOf();
      if (now - flag >= time) {
          fun.apply(this, arguments);
          flag = now;
      }
  }
}
var main = {
  debounce: debounce,
  throttle: throttle
};

module.exports = main;
