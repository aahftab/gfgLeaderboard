require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./"));
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/views'))

const users = { "themihirmathur": { "#school": { "count": 1 }, "#basic": { "count": 5 }, "#easy": { "count": 83 }, "#medium": { "count": 95 }, "#hard": { "count": 19 } }, "17amolgode": { "#school": { "count": 5 }, "#basic": { "count": 121 }, "#easy": { "count": 216 }, "#medium": { "count": 89 }, "#hard": { "count": 11 } }, "pk6176tpy": { "#school": { "count": 2 }, "#basic": { "count": 4 }, "#easy": { "count": 4 }, "#medium": { "count": 11 }, "#hard": { "count": 1 } }, "anuragfulare": { "#school": { "count": 6 }, "#basic": { "count": 18 }, "#easy": { "count": 35 }, "#medium": { "count": 3 }, "#hard": { "count": 0 } } };

app.get("/", (req, res) => {
  res.send("Hello World")
  // res.render("scoreboard.ejs", { title: "Scoreboard", users: users });
});

app.get("/user", (req, res) => {
  res.send("Hello World")
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
