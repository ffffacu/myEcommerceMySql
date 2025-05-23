import {Router} from 'express';
import carritoRoutes from '../modules/carrito/carrito.routes';
import carritoProductosRoutes from '../modules/carrito_productos/carrito_productos.routes';
import codigoFacilitoRoutes from "../modules/consultasCodigoFacilito/codigoFacilito.routes"

const router = Router();

router.use('/carrito', carritoRoutes);
router.use('/codigoFacilito', codigoFacilitoRoutes);
router.use('/carritoProductos', carritoProductosRoutes);


export default router