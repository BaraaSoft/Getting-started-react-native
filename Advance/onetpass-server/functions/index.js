const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// To deploy use >> firebase deploy --project one-time-password-da9e2
//url at >> https://us-central1-one-time-password-da9e2.cloudfunctions.net/helloWorld
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello Baraa from Firebase!");
});
