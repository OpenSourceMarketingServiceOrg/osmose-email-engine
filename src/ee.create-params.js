exports.createParams = ()=> {

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
    Source: 'danjenator@gmail.com', /* required */
    Tags: [
      {
        Name: 'Id', /* required */
        Value: '555-555' /* required */
      },
      /* more items */
    ]
  };


  return params;
};
