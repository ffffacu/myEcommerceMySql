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
const getPedidos = () => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.pool.query(`
SELECT 
  p.id AS pedido_id,
  c.nombre,
  c.apellido,
  c.dni,
  p.pago,
  p.direccion,
  p.delivery,
  p.total,
  p.observacion,
  GROUP_CONCAT(
    CONCAT(
      v.variacion, ' x', pd.cantidad,
      ' ($', pd.subtotal, ')'
    ) SEPARATOR ' | '
  ) AS productos
FROM pedidos_productos pd
JOIN pedidos p ON pd.pedido_id = p.id
JOIN variaciones v ON pd.variacion_id = v.id
JOIN clientes c ON p.cliente_id = c.id
WHERE p.finalizado = false
GROUP BY p.id
ORDER BY p.id ASC;
`);
    return rows;
});
const getPedidoId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.pool.query("SELECT * FROM pedidos WHERE id = ?", [id]);
    return rows;
});
const crearPedido = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const columna = Object.keys(data).join(", ");
    const placeholders = Object.values(data).map(() => '?').join(", ");
    const valores = Object.values(data);
    const result = yield db_1.pool.query(`INSERT INTO pedidos (${columna}) VALUES (${placeholders})`, valores);
    const id = result.insertId;
    return getPedidoId(id);
});
const finalizarPedido = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.pool.query("UPDATE pedidos SET finalizado = true WHERE id = ?", id);
});
exports.default = { getPedidos, getPedidoId, crearPedido, finalizarPedido };
