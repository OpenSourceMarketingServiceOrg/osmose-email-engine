exports.create = (addresses, email, from)=> {
  let params = {
    Destination: addresses,
    Message: {
      Body: {
        Html: {
          Data: email.body,
          Charset: 'UTF-8'
        }
      },
      Subject: {
        Data: email.subject,
        Charset: 'UTF-8'
      }
    },
    Source: from
  };
  return params;
};
