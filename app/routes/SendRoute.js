'use strict';

/**
* Send Route
* path: /send
******************** */

console.log("Init Send");

let express    = require('express');
let Controller = rootRequire('app/controllers/SendController');
let router     = express.Router();

router.get('/', Controller.index.post);

module.exports = router;
