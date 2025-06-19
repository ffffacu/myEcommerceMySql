import pedidosRepository from "./pedidos.repository";
import {Pedido} from "./pedidos.repository"


const getPedidos = async () => await pedidosRepository.getPedidos();
const getPedidoId = async (id:number) => await pedidosRepository.getPedidoId(id);
const crearPedido = async (data: Pedido) => await pedidosRepository.crearPedido(data);
const finalizarPedido = async(id:number) => await pedidosRepository.finalizarPedido(id);

export default { getPedidos, getPedidoId, crearPedido, finalizarPedido}