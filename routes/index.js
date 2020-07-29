const express = require("express");
const router = express.Router();

const { getMain, getSecond } = require("../controllers/index");

router.get("/", getMain);
router.get("/books", getSecond);

module.exports = router;
