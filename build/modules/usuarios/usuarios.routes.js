"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_controllers_1 = __importDefault(require("./usuarios.controllers"));
const router = (0, express_1.Router)();
router.post("/login", usuarios_controllers_1.default.getUsersLogin);
exports.default = router;
