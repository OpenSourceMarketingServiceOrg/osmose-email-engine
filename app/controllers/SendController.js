'use strict';
let Send = rootRequire('app/models/Send');

module.exports = {
  index: {
    post(req, res) {

      console.log("req: ", req);
      console.log("Send: ", Send);

    },
  }
};
