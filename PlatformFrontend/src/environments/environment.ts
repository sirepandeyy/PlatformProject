// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
  ,api:'https://localhost:4000',

  clientId : '1lfoel71s4v9ao1qb7s446kfbd',
  clientSecret : '167986mrt58d7fr3s7l0o7nevn80b8cg8j7g8d0pfv3bv3g383gq',  

  loginURL: 'https://appclients.auth.ap-south-1.amazoncognito.com/login?' +
              'client_id=1lfoel71s4v9ao1qb7s446kfbd&response_type=code&scope=openid+email&' +
              'redirect_uri=http://localhost:4200',

  redirectURL: 'http://localhost:4200',

  cognitoTokenURL: 'https://appclients.auth.ap-south-1.amazoncognito.com/oauth2/token',

  logout: 'https://appclients.auth.ap-south-1.amazoncognito.com/logout?' +
          'client_id=1lfoel71s4v9ao1qb7s446kfbd&' +
          'logout_uri=http://localhost:4200/login'
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
