/**
 * bd-examples - route.js
 * Created by mds on 15/6/3.
 */

'use strict';

var bd = require('bd');
var logger = bd.logger('app1');

module.exports = function (router) {
    router.get('/logid', function*(next) {
        var log = 'app1: ' + this.logid;
        logger.access(log);
        this.body = log;
        yield next;
    });
};