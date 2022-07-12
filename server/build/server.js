"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
// import RateLimit from 'express-rate-limit';
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
const port = 5000;
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use("/api", index_1.default);
app.use((req, res) => {
    res.status(404).send("Error: route doesn't exist (-_-)");
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
exports.default = app;
