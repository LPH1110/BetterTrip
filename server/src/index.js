const express = require("express");
const morgan = require("morgan");

const app = express();

// HTTP loggers
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Welcome to BetterTrip server!");
});

app.listen(3001);
