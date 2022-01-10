const stripe = require("stripe")(
  "sk_test_51KAyb7LbGgTfORrciV52Q36SxHCSkzfnA3tqXIPLw0tczQmE6V9juWuLtaRR2ShEHomrAqnqXng4XQAukqubfBSz00XtiLMvef"
);

(async () => {
  const customer = await stripe.customers.create({
    description: "845年 人類は超大型巨人の攻撃を受け、、",
    name: "株式会社 調査兵団",
    address: { city: "壁の中" },
    email: "one.click.creater@gmail.com",
  });
  console.log(customer);
})();
