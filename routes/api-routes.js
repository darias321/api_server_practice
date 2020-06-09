const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/api/test", (req, res) => {
  res.json({ mes: "hello from api" });
});

router.get("/api/test2", (req, res) => {
  res.json({ mes: "this is the second example" });
});

router.get("/api/test3", (req, res) => {
  res.json({ mes: "trying to do this myself" });
});
module.exports = router;
