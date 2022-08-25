const { application } = require("express");
var express = require("express");
var router = express.Router();
var cookieParser = require("cookie-parser");
const app = express();

/* GET home page. */
// Assignment 1
router.get("/", function (req, res, next) {
  res.render("index", { title: "My Server" });
});

// Assignment 2
router.get("/getData", function (req, res, next) {
  const input = req.query.number;

  if (input) {
    const number = Number(input);

    if (!isNaN(number) && number > 0 && Number.isInteger(number)) {
      let result = "";
      for (let i = 1; i <= number; i++) {
        if (i == 1) {
          result += i;
        } else {
          result += `+${i}`;
        }
      }
      res.send(`${result}`);
    } else {
      res.send("Wrong Parameter");
    }
  } else {
    res.send("Lack of Parameter");
  }
});

app.use(cookieParser());

router.get("/myName", function (req, res, next) {
  if (req.cookies.name !== undefined) {
    res.render("user", {
      title: "User page",
      username: `${req.cookies.name}`,
    });
  } else {
    res.render("signup");
  }
});

router.get("/trackName", function (req, res, next) {
  const username = req.query.name;
  res.cookie("name", username);

  res.send(`${username}`);
});

app.use(express.static("public"));

module.exports = router;
