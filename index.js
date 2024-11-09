const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("Sending new logs");
  res.status(200).json({res: "Test response - new version2"});
});

app.get("/test", (req, res) => {
  console.log("Sending new logs");
  res.status(200).json({res: "Test respons - new version2"});
});

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
}); 
