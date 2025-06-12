import variacionesRepository from "./variaciones.repository";

const createVariacion = async (data: any) => await variacionesRepository.create(data);
const getVariaciones = async () => await variacionesRepository.getAll();
const getVariacionById = async (id: number) => await variacionesRepository.getById(id);
const updateVariacion = async (id: number, data: any) => await variacionesRepository.update(id, data);
const deleteVariacion = async (id: number) => await variacionesRepository.deleteOne(id);

export default {
  createVariacion,
  getVariaciones,
  getVariacionById,
  updateVariacion,
  deleteVariacion
};
