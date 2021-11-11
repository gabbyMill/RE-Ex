import csv from "csvtojson";
import path from "path";
import Agent from "../../models/agent.js";
import express from "express";
const router = express.Router();

router.get("/:id/edit", (req, res, next) => {
  // will update agent's city
  // will update agent's city
  // will update agent's city
  // try {
  //   if (Object.values(req.query).length > 0) {
  //     res.json(data);
  //     // const j = JSON.stringify(req.query);
  //     // return res.redirect(`/a?key=value`);
  //     const q = Object.values(req.query)[0];
  //     const agentArray = data.map(obj => {
  //       if (obj["עיר מגורים"] === q) {
  //         console.log(obj);
  //         return obj["שם המתווך"];
  //       }
  //       res.json(agentArray);
  //     });
  //   } else {
  //     throw { status: 500, message: "Wrong Route" };
  //   }
  // } catch (err) {
  //   next(err);
  // }
});

export default router;
