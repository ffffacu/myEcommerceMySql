import productosRepository from "./productos.repository";

const getProducts = async (options: object) =>{return productosRepository.getProductos(options)};

const getProductsById = async(id:number) =>{ return productosRepository.getProductosPorId(id)}

const crearProducto = async ( data: object) =>{ return productosRepository.crearProducto(data)}

const actualizarPorducto = async (id: number, data: object)=>{return productosRepository.update(id, data)}

const borrarProducto = async (id: number) =>{ return productosRepository.deleteOne(id)}

export default {getProducts, getProductsById, crearProducto, actualizarPorducto, borrarProducto}