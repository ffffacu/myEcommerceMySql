import usuariosServices from "./usuarios.services";
import { Handler } from "express";


const getUsersLogin: Handler = async (_req,res) =>{
    try {
        const data = _req.body
        const result = await usuariosServices.getUsersLogin(data);
        res.status(200).json({status:"ok", usuario: result});
    } catch (error) {
        res.status(500).json({status:"Error al traer el usuario", error})
    }
} 

export default {getUsersLogin}