import variacionesRepository from "./variaciones.repository";

const createVariacion = (data: any) => variacionesRepository.create(data);
const getVariaciones = () => variacionesRepository.getAll();
const getVariacionById = (id: number) => variacionesRepository.getById(id);
const updateVariacion = (id: number, data: any) => variacionesRepository.update(id, data);
const deleteVariacion = (id: number) => variacionesRepository.deleteOne(id);

export default {
  createVariacion,
  getVariaciones,
  getVariacionById,
  updateVariacion,
  deleteVariacion
};
