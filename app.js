console.log("app.js running");
import express from "express";
import cors from "cors";
import morgan from "morgan";
import citiesRoute from "./backend/routes/citiesRoute.js";
import agentRoute from "./backend/routes/agentRoute.js";
import mulAgents from "./backend/routes/mulAgents.js";
import postcsv from "./backend/routes/postcsv.js";
import errorHandler from "./backend/middleware/errorHandler.js";

const app = express();

morgan.token("body", req => JSON.stringify(req.body));

app.use(cors());
app.use(express.json());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);
app.use("/csv", postcsv);
app.use("/cities", citiesRoute);
app.use("/agents", mulAgents);
app.use("/agent", agentRoute);

app.use(errorHandler);

export default app;
// 618d03b0bd5139dcf5482980
