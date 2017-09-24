'use strict';

module.exports = function(req, res, next) {
  var flash = req.session.flash;
  console.log("flash: ", flash);
  console.log("!flash.done: ", !flash.done);

  if (flash && !flash.done) {
    res.locals.flash = flash;
    flash.done = true;
  }

  next();
};
