import csv from "csvtojson";
import path from "path";
import Agent from "../../models/agent.js";
import express from "express";
const router = express.Router();

// Just a route I made for development
// Replaces insert-batch.js in example
router.post("/", async (req, res, next) => {
  console.log("csv");
  try {
    // implement error handling!
    const csvPath = path.resolve("./re.csv");
    const data = await csv().fromFile(csvPath);
    if (!data) {
      throw { status: 404, message: "Problem reading csv file" };
    }
    const mdbData = data.map(obj => {
      const name = obj["שם המתווך"];
      const license = obj["מס רשיון"];
      const city = obj["עיר מגורים"];
      const agent = Agent({
        name,
        license,
        city,
      });
      return agent;
    });
    const a = [{ name: "Gargamel" }, { name: "Yoni" }];
    const agent = await Agent.insertMany(a);
    if (!agent) {
      throw { status: 400, message: "Failed to post to MongoDB" };
    } else {
      console.log(`Data Inserted`);
    }
    res.json(mdbData);
  } catch (err) {
    next(err);
  }
});

// Handy to see data in postman
router.get("/", async (req, res) => {
  const agents = await Agent.find({});
  res.json(agents);
});
export default router;
