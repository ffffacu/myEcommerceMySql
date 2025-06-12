import carritoRepository from "./carrito.repository";

const getCart = async () => {
    try {
        return await carritoRepository.getCart();
    } catch (error) {
        if (error instanceof Error) {
            throw new Error('Error al obtener los carritos: ' + error.message);
        }
        throw new Error('Error desconocido al obtener los carritos');
    }
};

const getCartByToken = async (token:string) =>{
    const carrito = await carritoRepository.getCartByToken(token);
    if(!carrito){
        return await carritoRepository.createCart(token);
    }
    return carrito;
}

const cartRemnder = async (token: string) =>{
    const carrito = await carritoRepository.getCartByToken(token);
    return carrito;
}

const updateCart = async (id:number,data:object) =>{return await carritoRepository.updateCart(id,data)};

export default { getCart, getCartByToken, cartRemnder, updateCart };