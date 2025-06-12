import marcasRepository from "./marcas.repository";
import {Marcas} from "./marcas.repository"

const getMarcas = async () => await marcasRepository.getMarcas();
const getMarcasId = async (id: number) => await marcasRepository.getMarcasId(id);
const crearMarcas = async (data: Marcas)=> await marcasRepository.crearMarcas(data);
const actualizarMarcas = async (id:number, data:Object) => await marcasRepository.actualizarMarcas(id, data);
const borrarMarcas = async (id:number) => await marcasRepository.borrarMarcas(id)


export default {getMarcas, getMarcasId, crearMarcas, actualizarMarcas,borrarMarcas}