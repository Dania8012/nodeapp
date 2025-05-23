const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the HTML file
app.get("/", (req, res) => {
  console.log("Sending new logs");
  res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/test", (req, res) => {
  console.log("Sending new logs...");
  res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
