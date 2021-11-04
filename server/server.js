require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const pool = require("./modules/pool");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("build"));

// Route includes
const userRouter = require('./routes/userrouter');



//change this to push update 1



app.use('/api/user', userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server running on: ", PORT);
});