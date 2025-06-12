import sucursalesServices from "./sucursales.services";
import { Handler } from "express";


const getSucursales: Handler = async (_req, res)  => {
    try {
        const sucursales = await sucursalesServices.getSucursales()
        res.status(200).json({mensaje: "ok", data: sucursales})
    } catch (error) {
        res.status(500).json({ error: "Error al obtener las sucursales", Error });
    }
}

const getSucursalId: Handler =  async (_req, res)  => {
    try {
        const id = _req.params.id
        const sucursalId = await sucursalesServices.getSucursalId(Number(id))
        res.status(200).json({mensaje: "ok", data: sucursalId})
    } catch (error) {
        res.status(500).json({ error: "Error al obtener la sucursal", Error});
    }
}

const crearSucursal: Handler = async (_req, res)=>{
    try {
        const data = _req.body
        const nuevaSucursal =await sucursalesServices.crearSucursal(data)
        console.log(nuevaSucursal);
        res.status(200).json({mensaje: `${nuevaSucursal}`})
    } catch (error) {
        res.status(500).json({ error: "Error al obtener la sucursal", Error});
    }
}

const actualizarSucursal: Handler = async (_req, res) =>{
    try {
        const id = _req.params.id
        const data = _req.body
        const sucursalActualizada = await sucursalesServices.actualizarSucursal(Number(id), data)
        res.status(200).json({status:"Ok", data: sucursalActualizada})
    } catch (error) {
        res.status(500).json({error:"Error al actualizar la sucursal", Error})
    }
}

const borrarSucursal: Handler = async (_req, res) =>{
    try {
        const id = _req.params.id
        await sucursalesServices.borrarSucursal(Number(id))
        res.status(200).json({status:"Ok", mensaje:"Sucursal borrada exitosamente"});
    } catch (error) {
        res.status(500).json({error:"No pudimos borrar la sucursal", Error})
    }
}

export default{ getSucursales, getSucursalId, crearSucursal, actualizarSucursal, borrarSucursal}