"use strict";

const AWS = require('aws-sdk');
const ses = new AWS.SES({
  apiVersion: '2010-12-01',
  region: 'us-east-1'
});
const Engine = require('./osmose');

module.exports = class TodoController {
  static getAll(req, res) {

  }

  static getById(req, res) {

  }

  static createTodo(req, res) {

    console.log("engine: ", Engine);

    Engine.testesFunction("DezzNutz");

    console.log("createTodo: ", req.body);

    let params = {
      Destination: {
        ToAddresses: [
          'danjenator@gmail.com',
          /* more items */
        ]
      },
      Message: { /* required */
        Body: { /* required */
          Html: {
            Data: '<html><body><h1>Testes!</h1><p>workie?</p></body></html>', /* required */
            Charset: 'UTF-8'
          }
        },
        Subject: { /* required */
          Data: 'DezNutz', /* required */
          Charset: 'UTF-8'
        }
      },
      Source: 'danjenator@gmail.com'
    };
    ses.sendEmail(params, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
    });

  }

  static deleteTodo(req, res) {

  }
}
