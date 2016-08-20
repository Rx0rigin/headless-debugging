var express = require('express');
var router = express.Router();

// my docker diddnt like let for  var
var deepFoo = {
  theRightAnswer: "Every thing is fine! ",
  theWrongAnswer: "This is not the string you are looking for...",
  arrayOfFruit: [ 'strawberry', 'banana', 'orange'],
  aNumber: 1,
  aString: 'Do Ra Me Fa So La De Do'
}

function funkyFunction(x) {

  return x.theWrongAnswer;

};

/* GET users listing. */
router.get('/', function(req, res, next) {
  let response = funkyFunction(deepFoo);
  res.send(response);
});

module.exports = router;
