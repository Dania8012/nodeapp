const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("Sending new logs");
  res.status(200).json({res: "Test response"});
});

app.get("/test", (req, res) => {
  console.log("Sending new logs");
  res.status(200).json({res: "Test response"});
});

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
