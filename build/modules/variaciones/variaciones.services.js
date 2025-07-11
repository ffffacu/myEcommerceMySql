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
const variaciones_repository_1 = __importDefault(require("./variaciones.repository"));
const createVariacion = (data) => __awaiter(void 0, void 0, void 0, function* () { return yield variaciones_repository_1.default.create(data); });
const getVariaciones = () => __awaiter(void 0, void 0, void 0, function* () { return yield variaciones_repository_1.default.getAll(); });
const getVariacionById = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield variaciones_repository_1.default.getById(id); });
const updateVariacion = (id, data) => __awaiter(void 0, void 0, void 0, function* () { return yield variaciones_repository_1.default.update(id, data); });
const deleteVariacion = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield variaciones_repository_1.default.deleteOne(id); });
exports.default = {
    createVariacion,
    getVariaciones,
    getVariacionById,
    updateVariacion,
    deleteVariacion
};
