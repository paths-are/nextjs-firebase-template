const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

const createUserDocument = functions.auth.user().onCreate(async (user) => {
  // ユーザーコレクションに追加
  await db
      .collection("user")
      .doc(user.uid)
      .set(JSON.parse(JSON.stringify(user)));
});

exports.createUserDocument = createUserDocument;