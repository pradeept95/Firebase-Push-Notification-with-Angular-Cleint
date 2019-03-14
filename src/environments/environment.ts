// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/**
 * copy and paste your firebase config in firebase console
 * Authentication > Web Setub
 */
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDqyCMEcKjsM2F2heenGuFJGyaBS0QYR9g",
    authDomain: "manifacturinginfosystem.firebaseapp.com",
    databaseURL: "https://manifacturinginfosystem.firebaseio.com",
    projectId: "manifacturinginfosystem",
    storageBucket: "manifacturinginfosystem.appspot.com",
    messagingSenderId: "663402776868"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
