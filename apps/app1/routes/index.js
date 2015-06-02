/**
 * bd-examples - index.js
 * Created by mds on 15/6/2.
 */

'use strict';

module.exports = function (router) {
    router.get('/', function *(next) {
        this.body = 'Hello Create';
        yield next;
    });
};