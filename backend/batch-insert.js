import csv from "csvtojson";
import path from "path";
import mongoose from "mongoose";
import Agent from "../models/agent.js";
import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  console.log(url);
  const csvPath = path.resolve("./re.csv");
  const data = await csv().fromFile(csvPath);
  res.json(data);
});
router.post("/", async (req, res) => {
  const { name, city, license, id } = req.body;
  const agent = Agent({
    name,
    city,
    license,
    id,
  });
  console.log(agent);
  const response = await agent.save();
  console.log(`added ${response.name} number ${response.number} to phonebook`);
  res.json(response);
});
export default router;
