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
const rankController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rankData = TestData_json_1.default.scoresList;
        const finalScore = req.body.score;
        let rank = 0;
        // get rank%
        rankData.forEach((score, i) => {
            if (score < finalScore) {
                rank++;
            }
        });
        // modify rank;
        rank /= 0.3;
        res.json({
            staus: "success",
            data: Math.round(rank * 100) / 100,
        });
    }
    catch (error) {
        console.log(`Error while trying to get rank data: ${error}`);
        res.status(400).json({
            status: "error",
            message: `Error while trying to get rank data: ${error}`,
        });
    }
});
exports.default = rankController;
