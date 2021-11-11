import csv from "csvtojson";
import path from "path";
import Agent from "../../models/agent.js";
import express from "express";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const data = await Agent.find({}).distinct("city");
    console.log(data);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

// Bonus, able to add new agent to DB
router.post("/", async (req, res) => {
  const { name, city, license, id } = req.body;
  const agent = Agent({
    name,
    city,
    license,
  });
  const response = await agent.save();
  res.json(response);
});

export default router;
