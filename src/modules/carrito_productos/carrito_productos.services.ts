import carritoServices from "../carrito/carrito.services";
import variacionesServices from "../variaciones/variaciones.services";
import {pool} from "../../lib/db";


const addProductToCart = async (token: string, productId: number, cantidad: number, descuento: number): Promise<any> => {
    const cart:any = await carritoServices.getCartByToken(token);
    const producto = await variacionesServices.getVariacionById(productId);
    if(cart && producto && cantidad > 0 && typeof producto.precio === 'number'){
        await pool.query('INSERT INTO carrito_productos (carrito_id, variacion_id, cantidad, subtotal) VALUES (?, ?, ?, ?)', [cart.id, producto.id, cantidad, producto.precio]);
    const result =await carritoServices.updateCart(cart.id, {total: cart.total + producto.precio * cantidad - descuento, descuento: cart.descuento + descuento});
    return result}
    }

export default {addProductToCart}