import { Router } from "express";
import rankController from "../../controllers/rank.controller";

const rankRouter = Router();

rankRouter.post("/", rankController);

export default rankRouter;
