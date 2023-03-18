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
const checkList = (noun, verb, adj, adv, wordList, data) => {
    let temp = "";
    if (noun > 2) {
        temp = "noun";
    }
    else if (verb > 2) {
        temp = "verb";
    }
    else if (adj > 2) {
        temp = "adjective";
    }
    else if (adv > 2) {
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
const wordsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = TestData_json_1.default.wordList;
        let wordList = [];
        let noun = 0, verb = 0, adj = 0, adv = 0;
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
        }
        else if (adj == 0) {
            checkList(noun, verb, adj, adv, wordList, data);
        }
        else if (verb == 0) {
            checkList(noun, verb, adj, adv, wordList, data);
        }
        else if (noun == 0) {
            checkList(noun, verb, adj, adv, wordList, data);
        }
        // send the data to the user
        res.json({
            status: "success",
            data: wordList,
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
