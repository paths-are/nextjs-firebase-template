const stripe = require("stripe")(
  "sk_test_51KAyb7LbGgTfORrciV52Q36SxHCSkzfnA3tqXIPLw0tczQmE6V9juWuLtaRR2ShEHomrAqnqXng4XQAukqubfBSz00XtiLMvef"
);

(async () => {
  const price = await stripe.prices.create({
    unit_amount: 5000,
    currency: "jpy",
    product: "prod_Kr3G5CbjCxRWDw",
  });
  console.log(price);
})();
