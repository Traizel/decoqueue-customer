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
        let picToSend;
        if(item.upload_url1 !== null) {
          picToSend = item.upload_url1;
        } else if (item.upload_url2 !== null) {
          picToSend = item.upload_url2;
        } else if (item.upload_url3 !== null) {
          picToSend = item.upload_url3;
        } else if (item.upload_url4 !== null) {
          picToSend = item.upload_url4;
        } else if (item.upload_url5 !== null) {
          picToSend = item.upload_url5;
        } else if (item.upload_url6 !== null) {
          picToSend = item.upload_url6;
        } else if (item.upload_url7 !== null) {
          picToSend = item.upload_url7;
        } else if (item.upload_url8 !== null) {
          picToSend = item.upload_url8;
        } else if (item.upload_url9 !== null) {
          picToSend = item.upload_url9;
        } else if (item.upload_url10 !== null) {
          picToSend = item.upload_url10;
        } else if (item.upload_url11 !== null) {
          picToSend = item.upload_url11;
        } else if (item.upload_url12 !== null) {
          picToSend = item.upload_url12;
        } else if (item.upload_url13 !== null) {
          picToSend = item.upload_url13;
        } else if (item.upload_url14 !== null) {
          picToSend = item.upload_url14;
        } else if (item.upload_url15 !== null) {
          picToSend = item.upload_url15;
        } else if (item.upload_url16 !== null) {
          picToSend = item.upload_url16;
        } else if (item.upload_url17 !== null) {
          picToSend = item.upload_url17;
        } else if (item.upload_url18 !== null) {
          picToSend = item.upload_url18;
        } else if (item.upload_url19 !== null) {
          picToSend = item.upload_url19;
        } else if (item.upload_url20 !== null) {
          picToSend = item.upload_url20;
        }

        itemToSend.push({
          email: item.email, 
          first_name: item.first_name, 
          last_name: item.last_name,
          order_number: item.order_number,
          comments: item.comments,
          description: item.description,
          pic: picToSend});
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
