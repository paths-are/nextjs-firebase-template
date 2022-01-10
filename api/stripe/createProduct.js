const stripe = require("stripe")(
  "sk_test_51KAyb7LbGgTfORrciV52Q36SxHCSkzfnA3tqXIPLw0tczQmE6V9juWuLtaRR2ShEHomrAqnqXng4XQAukqubfBSz00XtiLMvef"
);

(async () => {
  const productList = ["剣", "ロケット", "雷装", "地下室の鍵"];
  for (let name of productList) {
    const product = await stripe.products.create({
      name: name,
    });
    console.log(product);
  }
})();
