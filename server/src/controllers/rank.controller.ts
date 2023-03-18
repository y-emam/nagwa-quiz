import { Request, Response } from "express";
import jsonData from "../TestData.json";

const rankController = async (req: Request, res: Response) => {
  try {
    const rankData = jsonData.scoresList;
    const finalScore = req.body.score;
    let rank = 1;

    // get rank%
    rankData.forEach((score, i) => {
      if (finalScore < score) {
        rank++;
      }
    });

    // modify rank;
    // rank /= 0.3;

    res.json({
      staus: "success",
      data: rank,
    });
  } catch (error) {
    console.log(`Error while trying to get rank data: ${error}`);
    res.status(400).json({
      status: "error",
      message: `Error while trying to get rank data: ${error}`,
    });
  }
};

export default rankController;
