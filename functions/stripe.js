const functions = require("firebase-functions");
const stripe = require("stripe")(
  "sk_test_51KAyb7LbGgTfORrciV52Q36SxHCSkzfnA3tqXIPLw0tczQmE6V9juWuLtaRR2ShEHomrAqnqXng4XQAukqubfBSz00XtiLMvef"
);

exports.createQuote = functions.https.onRequest(async (request, response) => {
  console.log(request.method);
  console.log(request.body);
  if (request.method === "GET") {
    const quote = await stripe.quotes.create({
      customer: "cus_Kr3AYzzA3obm40",
      line_items: [
        { price: "price_1KBLSkLbGgTfORrcQQ2cTwRT", quantity: 8 },
        { price: "price_1KBLjTLbGgTfORrclb16NIaS", quantity: 2 },
        { price: "price_1KBLiyLbGgTfORrcTea7Z43e", quantity: 4 },
        { price: "price_1KBLjALbGgTfORrcy9PS0EZq" },
      ],
    });
    console.log(quote);

    response.status(200).send("見積作成しました");
  }
  if (request.method === "POST") {
    response.status(200).send("it is post request");
  }
});
