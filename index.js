const express = require('express');
const app = express();

app.get('/', function (req, res){
  res.send("hallo!");
});

app.listen(3001, function() {
  console.log("Running on port 3001");
});
