const functions = require("firebase-functions");

exports.testPost = functions.https.onRequest(async (request, response) => {
  console.log(request.method);
  console.log(request.body);
  if (request.method === "POST") {
    response.status(200).send("it is post request");
  } else {
    response.status(400).send("it is not allowed");
  }
});
