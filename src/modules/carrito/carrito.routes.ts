import {Router} from  "express";
import carritoControllers from "./carrito.controllers";


const router = Router();

router.get("/", carritoControllers.getCart);
router.get("/token", carritoControllers.getCartByToken);

export default router