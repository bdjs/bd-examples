/**
 * bd-examples - index.js
 * Created by mds on 15/6/2.
 */

'use strict';

var bd = require('bd');

var app = bd();

//自动载入多个app
//自动将app里面的public设置为static目录
//自动载入routes里面的文件,先不支持目录，因为太多级别目录，目前也没有需求
//自动打印日志，往routes传入 app
//自动加载config，并将config传入函数

app.listen(3000);