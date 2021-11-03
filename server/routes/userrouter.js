const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const axios = require("axios");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
require("dotenv").config();

router.post("/login", (req, res) => {

  const order = req.body.order;
  const first = req.body.firstName;
  const last = req.body.lastName;

console.log(order, first, last);

const queryText = `SELECT * from "item";`;

pool
  .query(queryText)
  .then((result) => {
    console.log(result.data);

    // for (item of result.data) {

    // }

    res.sendStatus(201);
  })
  .catch((error) => {
    console.log("Error on get Items ", error);
    res.sendStatus(500);
  });
});

module.exports = router;
