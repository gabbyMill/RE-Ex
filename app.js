console.log("app.js running");
import express from "express";
import cors from "cors";
import morgan from "morgan";
import citiesRoute from "./backend/routes/citiesRoute.js";
import agentRoute from "./backend/routes/agentRoute.js";
import batch from "./backend/batch-insert.js";

const app = express();

morgan.token("body", req => JSON.stringify(req.body));

app.use(cors());
app.use(express.json());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

app.use("/cities", citiesRoute);
app.use("/agent", agentRoute);
app.use("/csv", batch);

// last
// app.use(errorHandler)

export default app;
