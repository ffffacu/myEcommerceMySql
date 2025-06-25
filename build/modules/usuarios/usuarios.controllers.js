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
const usuarios_services_1 = __importDefault(require("./usuarios.services"));
const getUsersLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield usuarios_services_1.default.getUsersLogin(data);
        if (result.length === 0) {
            res.status(401).json({ status: "error", message: "Usuario o contraseña incorrectos" });
            return; // Salir temprano, sin retornar res
        }
        res.status(200).json({ status: "ok", usuario: result[0] });
    }
    catch (error) {
        res.status(500).json({ status: "error", message: "Error al traer el usuario", error });
    }
});
exports.default = { getUsersLogin };
