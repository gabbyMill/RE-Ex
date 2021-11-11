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

router.get("/a", (req, res, next) => {
  console.log(2);
  console.log(req.query);
  res.json("123");
});
export default router;
