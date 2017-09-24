'use strict';

let path = require('path');

module.exports = function() {
  global.rootRequire = function(name) {
    console.log("name: ", name);
    return require(path.normalize(`${__dirname}/../${name}`));
  };
};
