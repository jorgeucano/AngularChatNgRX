// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCr93b0cRCdFIqxKWe6IxNcbkZLl2Xom3E",
    authDomain: "functions-example-5a84c.firebaseapp.com",
    databaseURL: "https://functions-example-5a84c.firebaseio.com",
    projectId: "functions-example-5a84c",
    storageBucket: "functions-example-5a84c.appspot.com",
    messagingSenderId: "428402660430"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
