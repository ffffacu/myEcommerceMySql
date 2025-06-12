import clientesServices from "./clientes.services";
import { Handler } from "express";


const getClientes: Handler = async (_req, res) =>{
    try {
        const result = await clientesServices.getClientes()
        res.status(200).json({status:"ok", data: result});
        
    } catch (error) {
        res.status(500).json({status:"No se pudo traer la lista de clientes", Error})
    }
}

const getClienteId: Handler = async (_req, res) =>{
    try {
        const id = _req.params.id;
        const result = await clientesServices.getClientesId(Number(id));
        res.status(200).json({status:"ok", data:result});
    } catch (error) {
        res.status(500).json({status:"No se pudo traer cliente por id", Error})
    }
}

const crearCliente: Handler = async (_req, res) =>{
    try {
        const data = _req.body;
        const result = await clientesServices.crearCliente(data);
        res.status(200).json({status:"ok", data:result});
    } catch (error) {
        res.status(500).json({status:"No se pudo crear el cliente", Error})
    }
}

const actualizarCliente: Handler = async (_req, res) =>{
    try {
        const data = _req.body;
        const id = _req.params.id;
        const result = await clientesServices.actualizarCliente(Number(id), data);
        res.status(200).json({status:"ok", data:result})
    } catch (error) {
        res.status(500).json({status:"No se pudo actualizar el cliente", Error})
    }
}

const borrarCliente: Handler = async (_req, res) =>{
    try {
        const id = _req.params.id;
        await clientesServices.borrarCliente(Number(id));
        res.status(200).json({status:"Cliente borrado correctamente"})
    } catch (error) {
        res.status(500).json({status:"No se pudo borrar el cliente", Error})
    }
}

export default {getClienteId,getClientes,actualizarCliente,crearCliente,borrarCliente}