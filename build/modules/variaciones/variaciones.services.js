"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const variaciones_repository_1 = __importDefault(require("./variaciones.repository"));
const createVariacion = (data) => variaciones_repository_1.default.create(data);
const getVariaciones = () => variaciones_repository_1.default.getAll();
const getVariacionById = (id) => variaciones_repository_1.default.getById(id);
const updateVariacion = (id, data) => variaciones_repository_1.default.update(id, data);
const deleteVariacion = (id) => variaciones_repository_1.default.deleteOne(id);
exports.default = {
    createVariacion,
    getVariaciones,
    getVariacionById,
    updateVariacion,
    deleteVariacion
};
