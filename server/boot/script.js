'use strict';

module.exports = function(app) {
    const model = app.models.TestModel;

    let instance;
    let obj;

    // normal object, pass
    obj = {};
    instance = model();

    // fail, as obj.constructor === undefined
    obj = Object.create(null);
    instance = model(obj);
};
