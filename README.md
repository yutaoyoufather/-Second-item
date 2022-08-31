

# 防抖和节流函数封装
### 下载
```
npm i encapsulation-debounce-throttle 
yarn add encapsulation-debounce-throttle
```
### 使用
### 返回一个对象 main 引入需要结构化赋值 对象里面有 2 个函数
``` 
//main 返回的对象
import  main from 'encapsulation-debounce-throttle';
//结构赋值 {debounce(防抖的函数名称),throttle(节流的函数名称)}
const { debounce ,throttle } = main
```
+ debounce 防抖函数
   + 接收两个参数:
   + func:函数
   + delay:时间 多久触发
   + 返回一个函数

+ throttle 节流函数
   + 接收两个参数:
   + time:时间 多久触发,
   + fun:函数
   + 返回一个函数

# Anti shake and throttle function encapsulation

### Return an object (main) to introduce, and structural assignment is required

### {debounce,throttle}
+ Debounce anti shake function
   + Receive two parameters:
   + Func: function
   + Delay: how long will it be triggered
   + Returns a function



+ Throttle function
   + Receive two parameters:
   + Time: how long is the trigger time,
   + Fun: functio
   + Returns a function
