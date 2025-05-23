import { pool } from "../../lib/db";



const getTablas = async () =>{
  const queries = {
    clientes: 'SELECT * FROM clientes',
    categorias: 'SELECT * FROM categorias',
    sucursales: 'SELECT * FROM sucursales',
    marcas: 'SELECT * FROM marcas',
    productos: 'SELECT * FROM productos',
    variaciones: 'SELECT * FROM variaciones',
    carrito: 'SELECT * FROM carrito',
    carrito_productos: 'SELECT * FROM carrito_productos',
    pedidos: 'SELECT * FROM pedidos',
    pedidos_productos: 'SELECT * FROM pedidos_productos',
  };

  const results: any = {};

  for (const [key, query] of Object.entries(queries)) {
    const [rows] = await pool.query(query);
    results[key] = rows;
  }

  return results;
};

const getProductosMasVendidos = async () =>{
    try {
        const [rows] = await pool.query(`SELECT 
    pedidos_productos.variacion_id AS Producto_id,
    variaciones.variacion AS Producto_Mas_Vendido,
    SUM(pedidos_productos.cantidad) AS Cantidad
    FROM pedidos_productos
    JOIN variaciones ON pedidos_productos.variacion_id = variaciones.id
    GROUP BY pedidos_productos.variacion_id
    ORDER BY Cantidad DESC
    LIMIT 1;`)
    return rows
    } catch (error) {
        if (error instanceof Error) {
            throw new Error('Error al obtener los pedidos: ' + error.message);
        }
        throw new Error('Error desconocido al obtener los pedidos');
    }
}

const getMejorCliente = async () =>{
    try {
        const [rows] = await pool.query(`
        SELECT C.*, COUNT(p.id) AS Cantidad_de_pedidos, SUM(p.total) AS Total_gastado FROM pedidos p
        JOIN clientes C ON C.id = p.cliente_id
        GROUP BY p.cliente_id
        ORDER BY Cantidad_de_pedidos DESC
        LIMIT 1;`)
    return rows
    } catch (error) {
        if (error instanceof Error) {
            throw new Error('Error al obtener los clientes: ' + error.message);
        }
        throw new Error('Error desconocido al obtener los clientes');
    }
}

const getMarcasEnEcommerce = async () =>{
    try {
        const [rows] = await pool.query(`
        SELECT m.id AS Marca_id , m.nombre AS Nombre_de_marca, SUM(v.enEcommerce) AS Productos_en_ecommerce FROM productos p
        JOIN variaciones v ON v.producto_id = p.id
        JOIN marcas m ON m.id = p.marca_id
        GROUP BY v.producto_id
        ORDER BY  Productos_en_ecommerce DESC;`)
    return rows
    } catch (error) {
        if (error instanceof Error) {
            throw new Error('Error al obtener los clientes: ' + error.message);
        }
        throw new Error('Error desconocido al obtener los clientes');
    }
}

const getSucursalesConMasPedidos = async () =>{
    try {
        const [rows] = await pool.query(`
        SELECT s.id,s.nombre, COUNT( p.sucursal_id) AS Pedidos from pedidos p
        JOIN sucursales s ON p.sucursal_id = s.id
        GROUP BY  p.sucursal_id
        ORDER BY Pedidos DESC
        LIMIT 5;`)
    return rows
    } catch (error) {
        if (error instanceof Error) {
            throw new Error('Error al obtener los clientes: ' + error.message);
        }
        throw new Error('Error desconocido al obtener los clientes');
    }
}

const getProductosSinGluten = async () =>{
    try {
        const [rows] = await pool.query(`
        SELECT c.nombre AS Categoria, COUNT( p.sinGluten) Cantidad_de_productos_sinGluten FROM productos p
        JOIN categorias c ON p.categoria_id = c.id
        WHERE p.sinGluten = 1
        GROUP BY p.categoria_id
        ORDER BY p.sinGluten DESC;`)
    return rows
    } catch (error) {
        if (error instanceof Error) {
            throw new Error('Error al obtener los clientes: ' + error.message);
        }
        throw new Error('Error desconocido al obtener los clientes');
    }
}

const getPorcentajePedidosCancelados = async () =>{
    try {
        const [rows] = await pool.query(`
        SELECT 
        COUNT(*) AS total_pedidos,
        SUM(CASE WHEN p.cancelado = 1 THEN 1 ELSE 0 END) AS pedidos_cancelados,
        ROUND(SUM(CASE WHEN p.cancelado = 1 THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS porcentaje_cancelados
        FROM pedidos p;`)
    return rows
    } catch (error) {
        if (error instanceof Error) {
            throw new Error('Error al obtener los clientes: ' + error.message);
        }
        throw new Error('Error desconocido al obtener los clientes');
    }
}


const getProductoEnPromocion = async () =>{
    try {
        const [rows] = await pool.query(`
        SELECT v.variacion AS Productos_en_Promocion,v.precio, v.precioPromocion AS Precio_en_Promocion FROM variaciones v
        WHERE  v. esPromocion = 1
        ORDER BY v.variacion DESC;`)
    return rows
    } catch (error) {
        if (error instanceof Error) {
            throw new Error('Error al obtener los clientes: ' + error.message);
        }
        throw new Error('Error desconocido al obtener los clientes');
    }
}



export default {getProductosMasVendidos, getMejorCliente, getMarcasEnEcommerce, getSucursalesConMasPedidos,getProductosSinGluten, getPorcentajePedidosCancelados, getProductoEnPromocion, getTablas}