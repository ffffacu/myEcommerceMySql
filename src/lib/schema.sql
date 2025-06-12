-- Creación de la tabla clientes

CREATE TABLE clientes (
    id INTEGER PRIMARY KEY AUTOINCREMENT, -- Identificador único
    nombre TEXT NOT NULL, -- Nombre del cliente
    apellido TEXT NOT NULL, -- Apellido del cliente
    dni INT UNIQUE CHECK(dni >= 1000000 AND dni <= 99999999) NOT NULL, -- Documento único
    cumpleaños DATE NOT NULL, -- Fecha de nacimiento
    direccion TEXT, -- Dirección
    email TEXT UNIQUE NOT NULL, -- Correo electrónico
    telefono INT CHECK(telefono > 0), -- Teléfono sin caracteres especiales
    observacion TEXT, -- Notas adicionales
    suscripcion BOOLEAN DEFAULT 0 -- 0 = No suscrito, 1 = Suscrito
);

-- Creación de la tabla categorias

CREATE TABLE categorias (
    id INTEGER PRIMARY KEY AUTOINCREMENT, -- Identificador único
    nombre TEXT NOT NULL, -- Nombre de la categoría
    descripcion TEXT, -- Descripción
    imagen TEXT -- Ruta de la imagen
);


-- Creacion de la tabla Sucursales

CREATE TABLE sucursales (
    id INTEGER PRIMARY KEY AUTOINCREMENT, -- Identificador único
    nombre TEXT NOT NULL, -- Nombre de la sucursal
    direccion TEXT, -- Dirección
    telefono INT CHECK(telefono > 0), -- Teléfono sin caracteres especiales
    email TEXT, -- Correo
    mercadopago TEXT, -- Mercadopago
    cerrado BOOLEAN DEFAULT 1 -- 0 = Abierta, 1 = Cerrada
);

-- Creacion de la tabla Marcas

CREATE TABLE marcas (
    id INTEGER PRIMARY KEY AUTOINCREMENT, -- Identificador único
    nombre TEXT NOT NULL, -- Nombre de la marca
    imagen TEXT -- Ruta de la imagen
);

-- Creacion de la tabla Productos

CREATE TABLE productos (
    id INTEGER PRIMARY KEY AUTOINCREMENT, -- Identificador único
    nombre TEXT NOT NULL, -- Nombre del producto
    marca_id INT NOT NULL, -- Identificador de la marca
    categoria_id INT NOT NULL, -- Identificador de la categoría
    descripcion TEXT, -- Descripción
    imagen TEXT, -- Ruta de la imagen
    sinGluten BOOLEAN DEFAULT 0, -- 0 = No, 1 = Si
    esCombo BOOLEAN DEFAULT 0, -- 0 = No, 1 = Si
    estado BOOLEAN DEFAULT 1, -- 0 = Inactivo, 1 = Activo
    
    FOREIGN KEY (marca_id) REFERENCES marcas(id),
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

-- Creacion de la tabla Variacion de productos

CREATE TABLE variaciones (
    id INTEGER PRIMARY KEY AUTOINCREMENT, -- Identificador único
    producto_id INT NOT NULL, -- Identificador del producto
    variacion TEXT NOT NULL, -- Variación
    precio INT NOT NULL, -- Precio
    precioPromocion INT, -- Precio de la promoción
    esPromocion BOOLEAN DEFAULT 0, -- 0 = No, 1 = Si
    enEcommerce BOOLEAN DEFAULT 1, -- 0 = No, 1 = Si
    imagen TEXT, -- Ruta de la imagen
    estado BOOLEAN DEFAULT 1, -- 0 = Inactivo, 1 = Activo

    FOREIGN KEY (producto_id) REFERENCES productos(id) 
);

-- Creacion de la tabla Carrito

CREATE TABLE carrito (
    id INTEGER PRIMARY KEY AUTOINCREMENT, -- Identificador único
    token TEXT NOT NULL, -- Token del carrito
    total INT NOT NULL, -- Total del carrito
    descuento INT -- Descuento del carrito
);

-- Creacion de productos en el carrito

CREATE TABLE carrito_productos (
    id INTEGER PRIMARY KEY AUTOINCREMENT, -- Identificador único
    carrito_id INT NOT NULL, -- Identificador del carrito
    variacion_id INT NOT NULL, -- Identificador de la variación
    cantidad INT NOT NULL, -- Cantidad de productos en el carrito
    subtotal INT NOT NULL, -- Precio del producto
    total INT NOT NULL, -- Total del producto

    FOREIGN KEY (carrito_id) REFERENCES carrito(id)
    );

-- Creacion de la tabla pedidos

CREATE TABLE pedidos (
    id INTEGER PRIMARY KEY AUTOINCREMENT, -- Identificador único
    sucursal_id INT NOT NULL, -- Identificador de la sucursal
    cliente_id INT NOT NULL, -- Identificador del cliente
    carrito_id INT NOT NULL, -- Identificador del carrito
    pago TEXT NOT NULL, -- Forma de pago
    delivery INT NOT NULL, -- Costo del delivery
    direccion TEXT NOT NULL, -- Direccion de entrega
    total INT NOT NULL, -- Total del pedido
    total_pedido INT NOT NULL, -- Total del pedido con delivery
    observacion TEXT, -- Notas adicionales
    cancelado BOOLEAN DEFAULT 0, -- 0 = No, 1 = Si
    finalizado BOOLEAN DEFAULT 0, -- 0 = No, 1 = Si
    pedido_pagado BOOLEAN DEFAULT 0, -- 0 = No, 1 = Si

    FOREIGN KEY (sucursal_id) REFERENCES sucursales(id),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    FOREIGN KEY (carrito_id) REFERENCES carrito(id)
);

-- Creacion de la tabla productos por pedido

CREATE TABLE pedidos_productos (
    id INTEGER PRIMARY KEY AUTOINCREMENT, -- Identificador único
    pedido_id INT NOT NULL, -- Identificador del pedido
    carrito_productos_id INT NOT NULL, -- Identificador del producto en el carrito
    cantidad INT NOT NULL, -- Cantidad por producto en el pedido
    subtotal INT NOT NULL, -- Subtotal por producto en el pedido
    total INT NOT NULL, -- Total por producto en el pedido

    FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
    FOREIGN KEY (carrito_productos_id) REFERENCES carrito_productos(id)
);







