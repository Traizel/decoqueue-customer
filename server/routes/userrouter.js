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

console.log(`order: ${order}, First Name: ${first}, Last Name: ${last}`);

const queryText = `SELECT * from "customerconfirm";`;

pool
  .query(queryText)
  .then((result) => {

    let itemToSend = []
    let failure = [{order_number: 'FAIL'}]
    for (item of result.rows) {
      if (order === item.order_number && first === item.first_name && last === item.last_name) {
        itemToSend.push(item);
      }
    }

    if (itemToSend[0]) {
      res.send(itemToSend).status(201);
    } else {
      res.send(failure).status(401);
    }

  })
  .catch((error) => {
    console.log("Error on get Items ", error);
    res.sendStatus(500);
  });
});

module.exports = router;
