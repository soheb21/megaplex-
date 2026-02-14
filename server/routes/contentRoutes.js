const express = require("express");
const {
  getContent,
  saveContent,
} = require("../controllers/contentController.js");
const loginAdmin = require("../controllers/adminController.js");

const router = express.Router();

router.get("/", getContent);

router.post("/", saveContent);
router.post("/login", loginAdmin);

module.exports = router;
