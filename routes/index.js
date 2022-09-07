const { Console } = require("console");
var express = require("express");
const { json } = require("express/lib/response");
var router = express.Router();
const calculate = require('../middleware/calculatebmi.js');
const {getBmiAndCategory}  = require('../middleware/calculatebmi');

router.get("/", async function (req, res, next) {
  res.send(
    await getBmiAndCategory()
  );
});

module.exports = router;