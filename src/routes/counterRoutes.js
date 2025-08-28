const express = require("express");
const { getCounter, addVote } = require("../controllers/counterController");

const router = express.Router();

router.get("/", getCounter);
router.post("/vote", addVote);

module.exports = router;
