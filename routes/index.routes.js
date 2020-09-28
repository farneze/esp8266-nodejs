require("dotenv").config();
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.render("index", { title: "ESP8266 🚀" }));

// Write here a post request to send data to ESP8266
// router.post("/", (req,res)=>);
module.exports = router;
