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
const productos_repository_1 = __importDefault(require("./productos.repository"));
const getProducts = (options) => __awaiter(void 0, void 0, void 0, function* () { return productos_repository_1.default.getProductos(options); });
const getProductsById = (id) => __awaiter(void 0, void 0, void 0, function* () { return productos_repository_1.default.getProductosPorId(id); });
const crearProducto = (data) => __awaiter(void 0, void 0, void 0, function* () { return productos_repository_1.default.crearProducto(data); });
const actualizarPorducto = (id, data) => __awaiter(void 0, void 0, void 0, function* () { return productos_repository_1.default.update(id, data); });
const borrarProducto = (id) => __awaiter(void 0, void 0, void 0, function* () { return productos_repository_1.default.deleteOne(id); });
exports.default = { getProducts, getProductsById, crearProducto, actualizarPorducto, borrarProducto };
