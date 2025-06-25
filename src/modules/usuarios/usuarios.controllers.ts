import usuariosServices from "./usuarios.services";
import { Request, Response} from 'express';

const getUsersLogin = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = req.body;
    const result = await usuariosServices.getUsersLogin(data);

    if (result.length === 0) {
      res.status(401).json({ status: "error", message: "Usuario o contraseña incorrectos" });
      return; // Salir temprano, sin retornar res
    }

    res.status(200).json({ status: "ok", usuario: result[0] });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Error al traer el usuario", error });
  }
};

export default {getUsersLogin}