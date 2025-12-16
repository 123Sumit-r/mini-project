const express = require("express");
const router = express.Router();
const User = require("../models/User");

// REGISTER
router.post("/register", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json({ message: "Registered Successfully" });
});

// LOGIN
router.post("/login", async (req, res) => {
  const user = await User.findOne(req.body);
  if (!user) {
    return res.status(401).json({ message: "Invalid Credentials" });
  }
  res.json(user);
});

module.exports = router;
