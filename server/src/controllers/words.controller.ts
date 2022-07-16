import { Request, Response } from "express";
import jsonData from "../TestData.json";

type word = {
  id: number;
  word: string;
  pos: string;
};

const checkList = (
  noun: number,
  verb: number,
  adj: number,
  adv: number,
  wordList: word[],
  data: word[]
) => {
  let temp = "";
  if (noun > 2) {
    temp = "noun";
  } else if (verb > 2) {
    temp = "verb";
  } else if (adj > 2) {
    temp = "adjective";
  } else if (adv > 2) {
    temp = "adverb";
  }

  for (let i = 0; i < wordList.length; i++) {
    if (wordList[i].pos === temp) {
      wordList.splice(i, 1);
      break;
    }
  }

  for (let i = 10; i < data.length; i++) {
    if (data[i].pos === "adverb") {
      wordList.push(data[i]);
    }
  }
};

const wordsController = async (req: Request, res: Response) => {
  try {
    const data = jsonData.wordList;
    let wordList = [];

    let noun = 0,
      verb = 0,
      adj = 0,
      adv = 0;

    let currentIndex = data.length;
    let randomIndex;

    // suffle the list
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [data[currentIndex], data[randomIndex]] = [
        data[randomIndex],
        data[currentIndex],
      ];
    }

    // take the first 10 elements
    for (let i = 0; i < 10; i++) {
      wordList[i] = data[i];

      switch (wordList[i].pos) {
        case "noun":
          noun++;
          break;
        case "verb":
          verb++;
          break;
        case "adverb":
          adv++;
          break;
        case "adjective":
          adj++;
          break;
      }
    }

    // // check that words have at leaset one noun, one verb, one adjective, and one adverb
    if (adv === 0) {
      checkList(noun, verb, adj, adv, wordList, data);
    } else if (adj == 0) {
      checkList(noun, verb, adj, adv, wordList, data);
    } else if (verb == 0) {
      checkList(noun, verb, adj, adv, wordList, data);
    } else if (noun == 0) {
      checkList(noun, verb, adj, adv, wordList, data);
    }

    // send the data to the user
    res.json({
      status: "success",
      data: wordList,
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
