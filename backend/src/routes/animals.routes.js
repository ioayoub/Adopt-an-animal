const express = require("express");

const router = express.Router();

const { browse, add } = require("../controllers/animals.controller");

router.get("/all", browse);
router.post("/create", add);

module.exports = router;
