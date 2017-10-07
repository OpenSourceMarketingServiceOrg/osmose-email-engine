const osmose = require('./dist/bundle');

// let addresses = {
//   BccAddresses: [],
//   CcAddresses: [
//     "recipient3@example.com"
//   ],
//   ToAddresses: [
//     "recipient1@example.com",
//     "recipient2@example.com"
//   ]
// };

let addresses = {
  ToAddresses:['danjenator@gmail.com']
}

let email = {
  subject: 'DezzNutz',
  body: '<html><body><h1>Testes!</h1><p>workie?</p></body></html>'
}

let from = "danjenator@gmail.com";

osmose.osmoseSendEmail(addresses, email, from);
