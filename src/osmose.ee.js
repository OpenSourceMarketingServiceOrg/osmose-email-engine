import AWS from 'aws-sdk';
import params from './ee.params';

exports.osmoseSendEmail = (addresses, email, from)=>{

  // static sendEmail(input, addresses, email, from) {

    const ses = new AWS.SES({
       apiVersion: '2010-12-01',
       region: 'us-east-1'
    });

    console.log('params: ', params.create(addresses, email, from));

    ses.sendEmail(params.create(addresses, email, from), function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
    });
}
