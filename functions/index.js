// API

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51I6uNEB9QTMZHSgC3O5Ie5w1ElUvkEXDlyMEtwjla8l5MWUaM0Xe5HPrFzGDuVZc431crUXDGc24kjlrhy5mhefX005gqemqUI"
);

// App congif

const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("Hello World"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request received! ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
    description: "testing",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen command

exports.api = functions.https.onRequest(app);
