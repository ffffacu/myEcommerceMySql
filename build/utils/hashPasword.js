"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidPassword = exports.createHash = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const createHash = (password) => {
    return bcrypt_1.default.hashSync(password, bcrypt_1.default.genSaltSync(10));
};
exports.createHash = createHash;
const isValidPassword = (userPassword, password) => {
    return bcrypt_1.default.compareSync(userPassword, password);
};
exports.isValidPassword = isValidPassword;
