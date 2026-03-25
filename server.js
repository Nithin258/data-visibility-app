const express = require("express");
const cors = require("cors");
const data = require("./data");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/data", (req, res) => {
  res.json(data.categories);
});

app.get("/activity", (req, res) => {
  res.json(data.activity);
});

app.post("/consent", (req, res) => {
  res.json({
    message: "Consent updated",
    body: req.body
  });
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});