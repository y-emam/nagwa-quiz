"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rank_controller_1 = __importDefault(require("../../controllers/rank.controller"));
const rankRouter = (0, express_1.Router)();
rankRouter.post("/", rank_controller_1.default);
exports.default = rankRouter;
