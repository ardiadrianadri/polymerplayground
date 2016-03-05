var express = require('express');
var router = express.Router();
var exampleCode = require('../controllers/examplesCode.js');

/* GET home page. */
router.get('/', exampleCode.getExampleCode);

module.exports = router;
