require("dotenv").config();
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.render("index", { title: "ESP8266 🚀" }));

module.exports = router;
