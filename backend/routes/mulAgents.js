import Agent from "../../models/agent.js";
import express from "express";
const router = express.Router();

router.get("/", async (req, res, next) => {
  console.log("in");
  try {
    if (!Object.values(req.query).length > 0) {
      throw { status: 500, message: "Wrong Route" };
    }
    const q = Object.values(req.query)[0];
    const agentList = await Agent.find({ city: q });
    if (agentList.length < 1) {
      throw { status: 404, message: "No such city in our database" };
    }
    res.json(agentList);
  } catch (err) {
    next(err);
  }
});

export default router;
