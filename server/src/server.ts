import express, { Request, Response } from "express";
import helmet from "helmet";
import cors from "cors";
// import RateLimit from 'express-rate-limit';
import routes from "./routes/index";

const app = express();
const port = 5000;

app.use(helmet());

app.use(express.json());

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/api", routes);

app.use((req, res) => {
  res.status(404).send("Error: route doesn't exist (-_-)");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

export default app;
