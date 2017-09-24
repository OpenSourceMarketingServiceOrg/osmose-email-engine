const express = require('express');
let bodyParser = require("body-parser");
let app = express();
const AWS = require('aws-sdk');
let ses = new AWS.SES();
let dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
const source = 'opensourcemarketingservice@gmail.com';
const sourceArn = 'arn:aws:ses:us-east-1:420906024005:identity/opensourcemarketingservice@gmail.com';

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/sendEmail', function (req, res){

//  console.log("req: ", req);
  console.log("req.body: ", req.body);

   var params = {
    Destination: {
     BccAddresses: req.body.bbcList,
     CcAddresses: req.body.ccList,
     ToAddresses: req.body.toList
    },
    Message: {
     Body: {
      Html: {
       Charset: "UTF-8",
       Data: req.body.body
      }
     },
     Subject: {
      Charset: "UTF-8",
      Data: req.body.subject
     }
    },
    Source: source,
    SourceArn: sourceArn
   };
   ses.sendEmail(params, function(err, data) {
     if (err) console.log(err, err.stack); // an error occurred
     else     console.log(data);           // successful response
   });

  res.send("success");
});

app.listen(3001, function() {
  console.log("Running on port 3001");
});
