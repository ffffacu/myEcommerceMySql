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
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../lib/db");
const getAllCategorias = () => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.pool.query("SELECT * FROM categorias");
    return rows;
});
const crearCategoria = (categoria) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.pool.query("INSERT INTO categorias (nombre, descripcion, imagen) VALUES (?, ?, ?)", [categoria.nombre, categoria.descripcion, categoria.imagen]);
});
const borrarCategoria = (categoriaId) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.pool.query("DELETE FROM categorias WHERE id = ?", [categoriaId]);
});
const actualizarCategoria = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const campos = [];
    const valores = [];
    if (data.nombre) {
        campos.push("nombre = ?");
        valores.push(data.nombre);
    }
    if (data.descripcion) {
        campos.push("descripcion = ?");
        valores.push(data.descripcion);
        if (data.imagen) {
            campos.push("imagen = ?");
            valores.push(data.imagen);
        }
        if (campos.length === 0) {
            throw new Error("No se proporcionaron campos para actualizar");
        }
        valores.push(id); // ID al final
        const query = `UPDATE categorias SET ${campos.join(", ")} WHERE id = ?`;
        yield db_1.pool.query(query, valores);
    }
    ;
});
exports.default = { getAllCategorias, crearCategoria, borrarCategoria, actualizarCategoria };
