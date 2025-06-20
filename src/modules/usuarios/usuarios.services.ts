import usuarioRepository from "./usuarios.repository";


const getUsersLogin = async (data:{usuario:string, contraseña: string}) =>{
    return await usuarioRepository.getUsersLogin(data)
}

export default {getUsersLogin}