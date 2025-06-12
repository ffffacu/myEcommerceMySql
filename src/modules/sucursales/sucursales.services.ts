import sucursalesRepository from "./sucursales.repository";
import {Sucursal} from "./sucursales.repository"


const getSucursales = async () => { return await sucursalesRepository.getSucursales()}

const getSucursalId = async (id:number)  =>{return await sucursalesRepository.getSucursalId(id)}

const crearSucursal = async (data: Sucursal) =>{
   if(!data.nombre || !data.direccion || !data.telefono || !data.email){
            return "Faltan datos para completar la creacion"
        }
   else{
      await sucursalesRepository.crearSucursal(data)
      return "Sucursal creada correctamente"
   }
    }

const actualizarSucursal = async (id:number, data: Partial<Sucursal>) => { 
    const sucursal= await sucursalesRepository.getSucursalId(id)
    if (!sucursal){return "Sucursal no encontrada"}
    const sucursalActualizada = await sucursalesRepository.actualizarSucursal(id, data);
    return sucursalActualizada
 }

 const borrarSucursal = async (id:number)  => {
    const sucursal = await sucursalesRepository.getSucursalId(id);
    if(!sucursal){return "Sucursal no encontrada"}
    await sucursalesRepository.borrarSucursal(id);
    return "Sucursal eliminada correctamente"
 }


export default {getSucursalId, getSucursales, crearSucursal, actualizarSucursal, borrarSucursal}