/**
 * bd-examples - name.js
 * Created by mds on 15/6/3.
 */

'use strict';

module.exports = function (router, logger) {
    router.get('/name', function*(next) {
        var log = 'app1';
        logger.access(log);
        this.body = log;
        yield next;
    });
};