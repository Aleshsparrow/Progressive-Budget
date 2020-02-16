const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
const router = require("./routes/api")

const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes here
app.use(router)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"))
})
// .catch(err => {
//   res.status(400).json(err);
// });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});