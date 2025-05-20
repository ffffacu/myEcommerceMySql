import carritoServices from "../carrito/carrito.services";
import variacionesServices from "../variaciones/variaciones.services";
import {pool} from "../../lib/db";


const addProductToCart = async (token: string, productId: number, cantidad: number, descuento: number) => {
    const cart:any = await carritoServices.getCartByToken(token);
    const producto = await variacionesServices.getVariacionById(productId);
    if(cart && producto){
        await pool.query('INSERT INTO carrito_productos (carrito_id, variacion_id, cantitdad, subtotal) VALUES (?, ?, ?, ?)', [cart._id, producto.id, cantidad, producto.precio]);
        }
    
    await carritoServices.updateCart(cart._id, {total: cart.total + producto.precio * cantidad - descuento, descuento: cart.descuento + descuento});
    }

export default {addProductToCart}