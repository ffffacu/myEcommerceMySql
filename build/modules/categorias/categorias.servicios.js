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
const categorias_repository_1 = __importDefault(require("./categorias.repository"));
const getAllCategorias = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categorias = yield categorias_repository_1.default.getAllCategorias();
        return categorias;
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error('Error al obtener las categorias: ' + error.message);
        }
        throw new Error('Error desconocido al obtener las categorias');
    }
});
const crearCategoria = (categoria) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield categorias_repository_1.default.crearCategoria(categoria);
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error('Error al crear la categoria: ' + error.message);
        }
        throw new Error('Error desconocido al crear la categoria');
    }
});
const borrarCategoria = (categoriaId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield categorias_repository_1.default.borrarCategoria(categoriaId);
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error('Error al borrar categoria:' + error.message);
        }
        throw new Error('Error desconocido al borrar categoria');
    }
});
const actualizarCategoria = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield categorias_repository_1.default.actualizarCategoria(id, data);
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error('Error al borrar categoria:' + error.message);
        }
        throw new Error('Error desconocido al borrar categoria');
    }
});
exports.default = { getAllCategorias, crearCategoria, borrarCategoria, actualizarCategoria };
