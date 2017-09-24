'use strict';

const source = 'opensourcemarketingservice@gmail.com';
const sourceArn = 'arn:aws:ses:us-east-1:420906024005:identity/opensourcemarketingservice@gmail.com';

let Email = {
 Destination: {
  BccAddresses: [],
  CcAddresses: [],
  ToAddresses: []
 },
 Message: {
  Body: {
   Html: {
    Charset: "UTF-8",
    Data: ""
   }
  },
  Subject: {
   Charset: "UTF-8",
   Data: ""
  }
 },
 Source: source,
 SourceArn: sourceArn
};

module.exports = Email;
