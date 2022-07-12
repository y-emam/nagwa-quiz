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
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../server"));
const tester = (0, supertest_1.default)(server_1.default);
const data = {
    score: 90,
};
describe("Testing rank endpoints", () => {
    it("checking for the status code", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield tester.post("/api/words").send(data);
        expect(response.statusCode).toEqual(200);
    }));
    it("checking for the response data of that endpoint", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield tester.post("/api/words").send(data);
        expect(response.body.data).toEqual(80);
    }));
});
