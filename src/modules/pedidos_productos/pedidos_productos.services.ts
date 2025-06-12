import pedidosProductosRepository from "./pedidos_productos.repository";


const getPedidosProductos = async () => {return await pedidosProductosRepository.getPedidosProductos();}

const getPedidosProductoPorPedidoId = async (pedidoId:number) =>{ return pedidosProductosRepository.getPedidosProductoPorPedidoId(pedidoId)}


export default { getPedidosProductos, getPedidosProductoPorPedidoId}


