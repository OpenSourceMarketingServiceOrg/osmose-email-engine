module.exports = [
  {
    path: '/',
    handler: rootRequire('app/routes/IndexRoute'),
  },
  {
    path: '/send',
    handler: rootRequire('app/routes/SendRoute'),
  },
];
