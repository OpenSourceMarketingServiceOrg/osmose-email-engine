import AWS from 'aws-sdk';
import params from './ee.params';

exports.osmoseSendEmail = (emailData) => {

    const ses = new AWS.SES({
        apiVersion: '2010-12-01',
        region: 'us-east-1'
    });

    emailData.to.ToAddresses.forEach((toAddy) => {

        let destination = {
            BccAddresses: emailData.to.BccAddresses,
            CcAddresses: emailData.to.CcAddresses,
            ToAddresses: [
                toAddy
            ]
        }
        let email = {
            subject: emailData.subject,
            body: emailData.content
        };
        let from = emailData.from;

        ses.sendEmail(params.create(destination, email, from), function(err, data) {
            if (err) console.error('err: ' + err, err.stack); // an error occurred
            else console.log('success data: ', data); // successful response
        });
    });
}