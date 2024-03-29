const express = require("express");
const app = express();
const admin = require("firebase-admin");

admin.initializeApp({
    credential: admin.credential.cert(require("dotenv").config.env.firebase),
    databaseURL: "https://analytics-d82d2-default-rtdb.firebaseio.com",
});

 const { getDatabase } = require("firebase-admin/database");
 const db = getDatabase();
 const ref = db.ref("Analytics")

app.use(express.json());
app.get("/getanalytics", function(req, res) {
    ref.get().then((snapshot => {
        snapshot = snapshot.val()

        res.json(snapshot);
    }));
});

const listener = app.listen(process.env.PORT, () => {
    console.log("Your app is listening on port " + listener.address().port);
});
  