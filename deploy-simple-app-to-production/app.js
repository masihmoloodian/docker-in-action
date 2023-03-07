const express = require("express");
const app = express();
require("dotenv").config();
const SECRET = process.env.MY_SECRET || "Plain text super secret";

app.get("/", function (req, res) {
  res.send("My Secret: " + SECRET);
});

app.listen(3000, function () {
  console.log("App listening on port 3000!");
});
