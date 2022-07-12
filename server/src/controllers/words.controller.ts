import { Request, Response } from "express";
import jsonData from "../TestData.json";

const wordsController = async (req: Request, res: Response) => {
  try {
    // const data = jsonData.wordList;
    // let wordList = [];
    // wordList = data;

    // let adverb = 2,
    //   noun = 5,
    //   verb = 4,
    //   adj = 4;

    // let counter = 5;

    // while (counter > 0) {
    //   let word = wordList[Math.floor(Math.random() * wordList.length)];
    //   // check for the type
    //   switch (word.pos) {
    //     case "adverb":
    //       if (adverb) {
    //         // remove element
    //         wordList.splice(word.id, 1);

    //         adverb--;
    //         counter--;
    //       }
    //       break;

    //     case "noun":
    //       if (noun) {
    //         // remove element
    //         wordList.splice(word.id, 1);

    //         noun--;
    //         counter--;
    //       }
    //       break;

    //     case "verb":
    //       if (verb) {
    //         // remove element
    //         wordList.splice(word.id, 1);

    //         verb--;
    //         counter--;
    //       }
    //       break;

    //     case "adjective":
    //       if (adj) {
    //         // remove element
    //         wordList.splice(word.id, 1);

    //         adj--;
    //         counter--;
    //       }
    //       break;

    //     default:
    //       break;
    //   }
    // }

    const data = jsonData.wordList;
    let wordList: object[] = [];

    let noun = 0,
      verb = 0,
      adj = 0,
      adv = 0;

    while (wordList.length < 10) {
      break;
    }

    res.json({
      status: "success",
      data: data,
    });
  } catch (error) {
    console.log(`Error while trying to get words data: ${error}`);
    res.status(400).json({
      status: "error",
      message: `Error while trying to get words data: ${error}`,
    });
  }
};

export default wordsController;
