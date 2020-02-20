const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.setFacebookEmailVerified = functions.auth.user().onCreate((user) => {
  user.providerData.forEach(provider => {
    if(provider.providerId === "facebook.com"){
      admin.auth().updateUser(user.uid, {
        emailVerified: true,
      });
    }
  });
});