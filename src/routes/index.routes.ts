import {Router} from 'express';
import carritoRoutes from '../modules/carrito/carrito.routes';
import codigoFacilitoRoutes from "../modules/consultasCodigoFacilito/codigoFacilito.routes"

const router = Router();

router.use('/carrito', carritoRoutes);
router.use('/codigoFacilito', codigoFacilitoRoutes);


export default router