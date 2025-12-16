const express = require("express");
const router = express.Router();
const Service = require("../models/Service");

router.get("/:type", async (req, res) => {
  const services = await Service.find({ type: req.params.type });
  res.json(services);
});

router.post("/add", async (req, res) => {
  const service = new Service(req.body);
  await service.save();
  res.json({ message: "Service Added" });
});

module.exports = router;
