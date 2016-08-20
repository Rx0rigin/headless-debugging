var express = require('express');
var router = express.Router();

let deepFoo = {
  theRightAnswer: "Every thing is fine! ",
  theWrongAnswer: "This is not the string you are looking for...",
  arrayOfFruit: [ 'strawberry', 'banana', 'orange'],
  aNumber: 1,
  aString: 'Do Ra Me Fa So La De Do'
}

function funkyFunction(x) {

  console.log("funky function debug is working");
  console.dir(deepFoo);
  return x.theWrongAnswer;

};

/* GET users listing. */
router.get('/', function(req, res, next) {
  let response = funkyFunction(deepFoo);
  res.send(response);
});

module.exports = router;
