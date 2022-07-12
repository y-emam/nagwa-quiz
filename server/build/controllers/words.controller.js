"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TestData_json_1 = __importDefault(require("../TestData.json"));
const wordsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const data = TestData_json_1.default.wordList;
        let wordList = [];
        let noun = 0, verb = 0, adj = 0, adv = 0;
        while (wordList.length < 10) {
            break;
        }
        res.json({
            status: "success",
            data: data,
        });
    }
    catch (error) {
        console.log(`Error while trying to get words data: ${error}`);
        res.status(400).json({
            status: "error",
            message: `Error while trying to get words data: ${error}`,
        });
    }
});
exports.default = wordsController;
