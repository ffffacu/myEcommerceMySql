import clientesRepository from "./clientes.repository";
import { Clientes } from "./clientes.repository";


const getClientes = async () =>{return await clientesRepository.getClientes()}

const getClientesId = async (id: number) =>{return await clientesRepository.getClientesId(id)}

const crearCliente = async (data: Clientes) =>{return await clientesRepository.crearCliente(data)}

const actualizarCliente = async (id:number, data:object) =>{return await clientesRepository.actualizarCliente(id,data)}

const borrarCliente = async (id:number) =>{return await clientesRepository.borrarCliente(id)}

export default{ getClientes,getClientesId,actualizarCliente,crearCliente,borrarCliente}

