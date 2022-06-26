const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_KEY);

const routes = express.Router();

const ProductController = require("./ProductController");

routes.get("/", ProductController.index);
routes.post("/api/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        console.log(req.body);
        return {
          price_data: {
            currency: "brl",
            product_data: {
              name: item.nome,
              images: [item.imgUrl],
            },
            unit_amount: item.preco * 100,
          },
          quantity: item.quantidade,
        };
      }),
      success_url: `http://localhost:4200/`,
      cancel_url: `http://localhost:4200/`,
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = routes;