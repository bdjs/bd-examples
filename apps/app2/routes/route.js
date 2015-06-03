/**
 * bd-examples - route.js
 * Created by mds on 15/6/3.
 */

'use strict';

module.exports = function (router, logger) {
    router.get('/logid', function*(next) {
        var log = 'app2: ' + this.logid;
        logger.access(log);
        this.body = log;
        yield next;
    });
};