import Agent from "../../models/agent.js";
import express from "express";

const router = express.Router();

router.put("/:id/edit", async (req, res, next) => {
  try {
    const { id } = req.params;
    const newCity = req.body.city;
    if (!newCity) throw { status: 400, message: "Must provide a city" };
    const oldAgent = await Agent.findByIdAndUpdate(
      { _id: id },
      { city: newCity }
    );
    const newAgent = await Agent.findById(id);
    res.json({ newAgent, oldAgent });
  } catch (error) {
    console.log(error);
  }
});

export default router;
