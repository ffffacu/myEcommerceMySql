import variacionesServices from "./variaciones.services";
import { Handler } from "express";

const getVariaciones: Handler = async (_req, res)  =>{
    try {
        const variaciones = await variacionesServices.getVariaciones()
        res.status(200).json({status:"Ok", data: variaciones})
    } catch (error) {
        res.status(500).json({status:"Error al traer las variaciones", Error})
    }
}


const getVariacionesId:  Handler = async (_req, res)  =>{
    try {
        const id = _req.params.id
        const variacionId = await variacionesServices.getVariacionById(Number(id))
        res.status(200).json({status:"Ok", data: variacionId})
    } catch (error) {
        res.status(500).json({status:"Error al buscar variacion", Error})
    }
}

const crearVariacion: Handler = async (_req, res)  =>{
    try {
        const data = _req.body
        const nuevaVariacion = await variacionesServices.createVariacion(data)
        res.status(200).json({status:"Ok", data: nuevaVariacion})
    } catch (error) {
        res.status(500).json({status:"Error al crear variacion", error})
    }
}

const actualizarVariacion : Handler = async (_req, res)  =>{
    try {
        const data = _req.body
        const id = _req.params.id
        const variacionActualizada = await variacionesServices.updateVariacion(Number(id),data);
        res.status(200).json({status:"Ok",data: variacionActualizada})
    } catch (error) {
        res.status(500).json({status:"Error al actualizar variacion", Error})
    }
}

const borrarVariacion: Handler = async (_req, res)  =>{
    try {
        const id = _req.params.id
        const variacionBorrada = await variacionesServices.deleteVariacion(Number(id))
        res.status(200).json({status:"ok", data: variacionBorrada})
    } catch (error) {
        res.status(500).json({status:"Error al borrar sucursal", Error})
    }
}

export default {getVariaciones, getVariacionesId, borrarVariacion, actualizarVariacion, crearVariacion}