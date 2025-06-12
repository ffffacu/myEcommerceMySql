import categoriasRepository from "./categorias.repository";


const getAllCategorias = async () => {
    try {
        const categorias = await categoriasRepository.getAllCategorias();
        return categorias;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error('Error al obtener las categorias: ' + error.message);
        }
        throw new Error('Error desconocido al obtener las categorias');
        
    }
};

const crearCategoria = async (categoria: any) => {
    try {
        await categoriasRepository.crearCategoria(categoria);
    } catch (error) {
        if (error instanceof Error) {
            throw new Error('Error al crear la categoria: ' + error.message);
        }
        throw new Error('Error desconocido al crear la categoria');
    }
};

const borrarCategoria = async (categoriaId: number) =>{
    try {
        await categoriasRepository.borrarCategoria(categoriaId)
    } catch (error) {
        if (error instanceof Error){
            throw new Error ('Error al borrar categoria:' + error.message)
        }
        throw new Error ('Error desconocido al borrar categoria')
    }
}

const actualizarCategoria = async (id: number,data:object) =>{
    try {
        await categoriasRepository.actualizarCategoria(id , data)
    } catch (error) {
        if (error instanceof Error){
            throw new Error ('Error al borrar categoria:' + error.message)
        }
        throw new Error ('Error desconocido al borrar categoria')
    }
    }

export default {getAllCategorias, crearCategoria, borrarCategoria, actualizarCategoria};