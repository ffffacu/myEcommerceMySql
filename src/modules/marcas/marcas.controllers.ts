import marcasServices from "./marcas.services";
import { Handler } from "express";


const getMarcas: Handler = async (_req, res)  =>{
    try {
        const marcas = await marcasServices.getMarcas();
        res.status(200).json({status:"ok", data: marcas})
    } catch (error) {
        res.status(500).json({status:"Error al traer marcas", Error})
    }
}

const getMarcasId : Handler = async (_req, res)  =>{
    try {
        const id = _req.params.id;
        const marcaId = await marcasServices.getMarcasId(Number(id));
        res.status(200).json({status:"ok", data: marcaId});
    } catch (error) {
        res.status(500).json({status:"Error al buscar marca por id", Error})
    }
}

const crearMarca: Handler = async (_req, res)  =>{
    try {
        const data = _req.body;
        const nuevaMarca = await marcasServices.crearMarcas(data);
        res.status(200).json({status:"ok", data: nuevaMarca});
    } catch (error) {
        res.status(500).json({status:"Error al crear marca", Error})
    }
}

const actualizarMarcas: Handler = async (_req, res)  =>{
    try {
        const id = _req.params.id
        const data = _req.body
        const marcaActualizada = await marcasServices.actualizarMarcas(Number(id), data);
        res.status(2200).json({status:"ok",data: marcaActualizada});
    } catch (error) {
        res.status(500).json({status:"Error al actualizar marca", Error})
    }
}

const borrarMarca : Handler = async (_req, res)  =>{
    try {
        const id = _req.params.id;
        await marcasServices.borrarMarcas(Number(id));
        res.status(200).json({status:"ok", menssage: "Sucursal eliminada correctamente"})
    } catch (error) {
        res.status(500).json({status:"Error al borrar sucursal", Error});
    }
}

export default { getMarcas, getMarcasId, crearMarca, actualizarMarcas, borrarMarca}