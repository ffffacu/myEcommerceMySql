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
const marcas_repository_1 = __importDefault(require("./marcas.repository"));
const getMarcas = () => __awaiter(void 0, void 0, void 0, function* () { return yield marcas_repository_1.default.getMarcas(); });
const getMarcasId = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield marcas_repository_1.default.getMarcasId(id); });
const crearMarcas = (data) => __awaiter(void 0, void 0, void 0, function* () { return yield marcas_repository_1.default.crearMarcas(data); });
const actualizarMarcas = (id, data) => __awaiter(void 0, void 0, void 0, function* () { return yield marcas_repository_1.default.actualizarMarcas(id, data); });
const borrarMarcas = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield marcas_repository_1.default.borrarMarcas(id); });
exports.default = { getMarcas, getMarcasId, crearMarcas, actualizarMarcas, borrarMarcas };
