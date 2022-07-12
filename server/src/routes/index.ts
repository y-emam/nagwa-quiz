import express, { Request, Response, Router } from "express";
import wordsRoutes from "./api/words.routes";
import ranksRoutes from "./api/rank.routes";

const routes = express.Router();

routes.use("/words", wordsRoutes);
routes.use("/rank", ranksRoutes);
export default routes;
