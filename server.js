var express = require('express');
var app = express();

//app.configure, app.use etc

app.listen(process.env.PORT || '8000', function(){
  console.log("8000. Baruh Hashem!")
});
