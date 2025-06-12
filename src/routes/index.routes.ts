import {Router} from 'express';
import carritoRoutes from '../modules/carrito/carrito.routes';
import carritoProductosRoutes from '../modules/carrito_productos/carrito_productos.routes';
import codigoFacilitoRoutes from "../modules/consultasCodigoFacilito/codigoFacilito.routes"
import categoriasRoutes from '../modules/categorias/categorias.routes';
import sucursalesRoutes from '../modules/sucursales/sucursales.routes';
import variacionRoutes from '../modules/variaciones/variaciones.routes';
import marcasRoutes from '../modules/marcas/marcas.routes';
import pedidoRoutes from '../modules/pedidos/pedidos.routes';
import pedidosProductosRoutes from '../modules/pedidos_productos/pedidos_productos.routes';
import clientesRouter from '../modules/clientes/clientes.routes';
import productosRouter from '../modules/productos/productos.routes';

const router = Router();

router.use('/carrito', carritoRoutes);
router.use('/codigoFacilito', codigoFacilitoRoutes);
router.use('/carritoProductos', carritoProductosRoutes);
router.use('/categorias', categoriasRoutes);
router.use('/sucursales', sucursalesRoutes);
router.use('/variaciones', variacionRoutes);
router.use('/marcas', marcasRoutes);
router.use('/pedidos', pedidoRoutes);
router.use('/pedidoProductos', pedidosProductosRoutes);
router.use('/clientes', clientesRouter)
router.use('/productos',productosRouter)


export default router