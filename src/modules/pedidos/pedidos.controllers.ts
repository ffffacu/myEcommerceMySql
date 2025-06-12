import pedidosServices from "./pedidos.services";
import { Handler } from "express";

const getPedidos: Handler = async (_req,res) =>{
    try {
        const pedidos = await pedidosServices.getPedidos();
        res.status(200).json({status: "ok", data: pedidos })
    } catch (error) {
        res.status(500).json({status: "Error al traer los pedidos", Error})
    }
}

const getPedidosId: Handler = async (_req,res) =>{
    try {
        const id = _req.params.id
        const pedido = await pedidosServices.getPedidoId(Number(id));
        res.status(200).json({status: "ok", data: pedido })
    } catch (error) {
        res.status(500).json({status: "Error al traer el pedido", Error})
    }
}

const crearPedido: Handler = async (_req,res)=>{
    try {
        const data = _req.body;
        const nuevoPedido = await pedidosServices.crearPedido(data);
        res.status(200).json({status:"ok", data: nuevoPedido});
    } catch (error) {
        res.status(500).json({status:"Error al crear pedido", Error})
    }
}


export default {getPedidos, getPedidosId, crearPedido}