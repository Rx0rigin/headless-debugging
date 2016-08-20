var express = require('express');
var router = express.Router();


let MyVar = null;

function setMyVar() {
  return 'Never gonna let you down!';
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send( 'The value of my var is: ' + MyVar);
});

module.exports = router;
