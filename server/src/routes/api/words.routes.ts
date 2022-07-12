import { Router } from "express";
import wordsController from "../../controllers/words.controller";

const wordsRoutes = Router();

wordsRoutes.get("/", wordsController);

export default wordsRoutes;
