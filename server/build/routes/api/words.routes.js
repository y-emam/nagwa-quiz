"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const words_controller_1 = __importDefault(require("../../controllers/words.controller"));
const wordsRoutes = (0, express_1.Router)();
wordsRoutes.get("/", words_controller_1.default);
exports.default = wordsRoutes;
