const functions = require("firebase-functions");

exports.testGet = functions.https.onRequest(async (request, response) => {
  console.log(request.method);
  console.log(request.body);
  if (request.method === "GET") {
    response.status(200).send("it is get request");
  } else {
    response.status(400).send("it is not allowed")
  }
});
