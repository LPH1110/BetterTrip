const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// CORS
app.use(cors());

// HTTP loggers
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Welcome to BetterTrip server!");
});

app.listen(port, () => {
  console.log(`Server app listening on port ${port}`);
});
