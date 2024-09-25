const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

const mongoURL = `mongodb://mongo:27017/dockerdb`;

mongoose
  .connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Connected to mongoDB`))
  .catch(() => console.error(`Mongo Connection error ${error}`));

app.get("/", (req, res) => {
  res.send("Hello World from Dockerized Node.js app!");
});

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});


