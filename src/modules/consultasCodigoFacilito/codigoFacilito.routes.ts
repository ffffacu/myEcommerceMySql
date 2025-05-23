import { Router } from "express";
import codigoFacilito from "./codigoFacilito.controllers";

const router = Router();

router.get ("/tablas", codigoFacilito.getTablas);
router.get("/productoMasVendido", codigoFacilito.getProductosMasVendidos);
router.get("/mejorCliente", codigoFacilito.getMejorCliente);
router.get("/marcasEnEcommerce", codigoFacilito.getMarcasEnEcommerce);
router.get("/sucursalesConMasPedidos", codigoFacilito.getSucursalesConMasPedidos);
router.get("/productosSinGluten", codigoFacilito.getProductosSinGluten);
router.get("/porcentajePedidosCancelados", codigoFacilito.getPorcentajePedidosCancelados);
router.get("/productoEnPromocion", codigoFacilito.getProductoEnPromocion);

export default router

