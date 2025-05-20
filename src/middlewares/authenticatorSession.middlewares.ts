import { NextFunction, Request, Response } from "express";
import {createToken, verifyToken} from "../utils/jwt";
import carritoService from "../modules/carrito/carrito.services";
import carritoProductosRepository from "../modules/carrito_productos/carrito_productos.repository";

export const authenticatorToken = () =>{
    return async (req: Request, res: Response, next: NextFunction): Promise<void> =>{
        const token = req.cookies.sessionToken;
        let sessionId
        
        if(token){
            const decode: any = verifyToken(token);
            sessionId = decode.sessionId;
            if(sessionId){
                const carrito = await carritoService.cartRemnder(sessionId);
                if(carrito !== null){
                    const productCart = await carritoProductosRepository.getProductsByCartId(carrito?.id);
                    if(carrito){
                        req.productCart = productCart ?? [];
                    }
                }else{
                    req.productCart = [];
                    
                }
            }
        }
        if(!sessionId){
            const newToken = createToken();
            res.cookie("sessionToken", newToken, {httpOnly: true});
        }
        next()
    }
}