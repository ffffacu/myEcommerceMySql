"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config/config"));
const uuid_1 = require("uuid");
const createToken = () => {
    const sessionId = (0, uuid_1.v4)();
    const token = jsonwebtoken_1.default.sign({ sessionId }, config_1.default.SECRET_CODE, { expiresIn: "2h" });
    return token;
};
exports.createToken = createToken;
const verifyToken = (token) => {
    try {
        const decode = jsonwebtoken_1.default.verify(token, config_1.default.SECRET_CODE);
        return decode;
    }
    catch (error) {
        return error;
    }
};
exports.verifyToken = verifyToken;
