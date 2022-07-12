"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const words_routes_1 = __importDefault(require("./api/words.routes"));
const rank_routes_1 = __importDefault(require("./api/rank.routes"));
const routes = express_1.default.Router();
routes.use("/words", words_routes_1.default);
routes.use("/rank", rank_routes_1.default);
exports.default = routes;
