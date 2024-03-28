const express = require("express");
const app = express();

app.use(express.json());
app.get("/getanalytics", function(req, res) {
    res.json({})
});

app.get("/getanalytics2", function(req, res) {
    res.json({a: b})
});

const listener = app.listen(process.env.PORT, () => {
    console.log("Your app is listening on port " + listener.address().port);
});
  