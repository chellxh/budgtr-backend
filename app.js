const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const indexController = require("./controllers/indexController");
const budgetController = require("./controllers/budgetController");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use("/", indexController);
app.use("/summary", budgetController);

app.use("*", (req, res) => {
  res.status(404).send("Sorry, no page found!");
});

module.exports = app;
