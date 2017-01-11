var express = require('express');
var app = express();
var favicon = require('serve-favicon');
var morgan = require('morgan');
var bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.get('/user',function(req,res){
  var dataObj = {
  "data": {
    "name": "Toby"
  }
}
  res.send(dataObj);
});

app.post('/calc',function(req,res){
  console.log(req.body + "haha");
  var calc = req.body.calc;
  var nums = calc.split(',');

  if(!nums.some(isNaN) && nums.length > 1){
    for(var i= 0; i < nums.length; i++){
      nums[i] = parseInt(nums[i], 10);
    }
    var sum = nums.reduce(function(a,b){
      return a + b;
    }, 0);
//     var sumObj = {
//     "data": {
//       "answer": sum
//     }
// }
      res.json({
      data: {
        answer: sum
      }
    });
  } else {
    res.json({
      error: {
        code: 404,
        message: "Please include a comma separated list of numbers"
      }
    });
  }
  console.log(sum);
  res.send(sumObj);
});


var port = 3000;
app.listen(port, function(){
  console.log('Listening on port ' + port);
});
