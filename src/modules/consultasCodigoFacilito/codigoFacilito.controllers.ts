import { Handler } from "express";
import codigoFacilitoServices from "./codigoFacilito.services";


const getTablas:Handler = async (_req, res) => {
  try {
    const tablas = await codigoFacilitoServices.getTablas();
    res.status(200).json(tablas);
  } catch (error) {
    console.error('Error al obtener resumen:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const getProductosMasVendidos: Handler = async (_req, res) => {
    try {
        const productosMasVendidos = await codigoFacilitoServices.getProductosMasVendidos();
        res.status(200).json(productosMasVendidos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos más vendidos' });
    }
};

const getMejorCliente: Handler = async (_req, res) => {
    try {
        const mejorCliente = await codigoFacilitoServices.getMejorCliente();
        res.status(200).json(mejorCliente);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el mejor cliente' });
    }
};

const getMarcasEnEcommerce: Handler = async (_req, res) => {
    try {
        const marcasEnEcommerce = await codigoFacilitoServices.getMarcasEnEcommerce();
        res.status(200).json(marcasEnEcommerce);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las marcas en ecommerce' });
    }
};

const getSucursalesConMasPedidos: Handler = async (_req, res) => {
    try {
        const sucursalesConMasPedidos = await codigoFacilitoServices.getSucursalesConMasPedidos();
        res.status(200).json(sucursalesConMasPedidos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las sucursales con más pedidos' });
    }
};

const getProductosSinGluten: Handler = async (_req, res) => {
    try {
        const productosSinGluten = await codigoFacilitoServices.getProductosSinGluten();
        res.status(200).json(productosSinGluten);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos sin gluten' });
    }
}

const getPorcentajePedidosCancelados: Handler = async (_req, res) => {
    try {
        const porcentajePedidosCancelados = await codigoFacilitoServices.getPorcentajePedidosCancelados();
        res.status(200).json(porcentajePedidosCancelados);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el porcentaje de pedidos cancelados' });
    }
};


const getProductoEnPromocion: Handler = async (_req, res) => {
    try {
        const productoEnPromocion = await codigoFacilitoServices.getProductoEnPromocion();
        res.status(200).json(productoEnPromocion);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el producto en promoción' });
    }
}

export default {
    getProductosMasVendidos,
    getMejorCliente,
    getMarcasEnEcommerce,
    getSucursalesConMasPedidos,
    getProductosSinGluten,
    getPorcentajePedidosCancelados,
    getProductoEnPromocion,
    getTablas
}