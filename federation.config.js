const {
  withNativeFederation,
  shareAll,
} = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'myapp',

  exposes: {
    './Routes': './src/app/app.routes.ts',
    './App': './src/app/app.ts',
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
  
  skip: [
    // Add any packages that should not be shared
    'rxjs/operators'
  ]
});
