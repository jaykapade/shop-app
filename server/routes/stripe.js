const router = require("express").Router();
//! Add Secret Key Directly here instead of PROCESS.env.STRIPE_KEY
const stripe = require("stripe")(
  "sk_test_51JJaIxSHq5aXuMQIcU7bMdExfiJjBuayYnbpDnarUXyDbOP5bNbUcUk7Ecx3sGMT64Y0pTHyfckUwMQS2slyR6aF00ZosidL1k"
);

router.post("/payment", (req, res) => {
  // console.log(process.env.STRIPE_KEY);
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "inr",
      description: "Testing it man allow it",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        console.log(stripeErr);
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
