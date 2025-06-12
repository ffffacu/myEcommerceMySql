import pedidosProductosServices from "./pedidos_productos.services";
import { Handler } from "express";


const getPedidosProductos: Handler = async (_req, res) => {
    try {
        const pedidos = await pedidosProductosServices.getPedidosProductos();
        res.status(200).json({status: "ok", data: pedidos});
    } catch (error) {
        res.status(500).json({status: "Error al traer pedidos", Error})
    }
}


const getPedidosProductoPorPedidoId: Handler = async (_req, res) =>{
    try {
        const pedidoId = _req.params.pedidoId
        const pedidoPorProductoId = await pedidosProductosServices.getPedidosProductoPorPedidoId(Number(pedidoId));
        res.status(200).json({status: "ok", data: pedidoPorProductoId})
        } catch (error) {
        res.status(500).json({status:"Error al traer pedidos por pedido id", Error})
    }
}

export default{ getPedidosProductos, getPedidosProductoPorPedidoId}