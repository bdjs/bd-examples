/**
 * bd-examples - name.js
 * Created by mds on 15/6/3.
 */

'use strict';

var bd = require('bd');
var logger = bd.logger('app1');

module.exports = function (router) {
    router.get('/name', function*(next) {
        var log = 'app1';
        logger.access(log);
        this.body = log;
        yield next;
    });
};