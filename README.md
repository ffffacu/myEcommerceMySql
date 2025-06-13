# Ecommerce Backend

Este proyecto está basado en un ecommerce y tiene como objetivo principal crear un backend robusto para gestionar toda la información necesaria del lado del usuario. El backend permite realizar operaciones como la gestión de carritos, productos, pedidos y usuarios, proporcionando una base sólida para un sistema de comercio electrónico.

## Tecnologías Usadas

- **Node.js**: Entorno de ejecución para JavaScript.
- **Express**: Framework para construir aplicaciones web y APIs.
- **MySql**: Base de datos SQL para almacenar la información.
- **bcrypt**: Librería para el hashing de contraseñas.
- **jsonwebtoken**: Para la autenticación y autorización de usuarios.
- **Swagger**: Para la documentación de la API.

## Características

- **Gestión de Carritos**: Los usuarios pueden crear carritos y agregar productos, incluso si no completan la compra.
- **Registro de Pedidos**: Se registran todos los pedidos realizados, junto con los productos asociados.
- **Análisis de Ventas**: Permite obtener estadísticas sobre los productos más vendidos y otros datos relevantes.
- **Autenticación y Autorización**: Uso de JWT (JSON Web Tokens) para asegurar las rutas y proteger los datos del usuario.

## Instalación

Para instalar el proyecto, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd tu-repositorio
   ```

3. Instala las dependencias necesarias:
   ```bash
   npm install
   ```

4. Si encuentras problemas con las dependencias, intenta solucionarlos con:
   ```bash
   npm audit fix
   ```

## Uso

Una vez instalado el proyecto, puedes iniciar el servidor con el siguiente comando:

```bash
npm start
```

Luego, accede a la documentación de la API en tu navegador:

```
http://localhost:8080/api-docs/#/
```

La documentación generada con Swagger te permitirá explorar y probar las diferentes rutas y funcionalidades de la API.

## Estructura del Proyecto

El proyecto está organizado con una arquitectura de capas, que incluye:

- **Controllers**: Manejan la lógica de las rutas y las solicitudes HTTP.
- **Services**: Contienen la lógica de negocio y se comunican con los modelos.
- **Models**: Definen la estructura de los datos y se comunican con la base de datos.
- **Routes**: Definen las rutas de la API y las asocian con los controladores.
- **Middlewares**: Funciones que se ejecutan antes de llegar a los controladores, como la autenticación.
- **Config**: Configuraciones generales del proyecto, como la conexión a la base de datos.

## Pruebas

Actualmente, el proyecto no cuenta con pruebas unitarias o de integración. Sin embargo, se planea implementarlas en futuras actualizaciones.

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas contribuir al proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama con tu contribución:
   ```bash
   git checkout -b nombre-de-tu-rama
   ```
3. Realiza tus cambios y haz commit:
   ```bash
   git commit -m "Descripción de tus cambios"
   ```
4. Envía un pull request a la rama principal del repositorio original.

## Licencia

Este proyecto está bajo la licencia MIT. Para más detalles, consulta el archivo LICENSE.

## Dependencias

Las dependencias clave del proyecto incluyen:

- **express**: Framework para construir la API.
- **mysql12**: Para la conexión y gestión de la base de datos MongoDB.
- **bcrypt**: Para el hashing de contraseñas.
- **jsonwebtoken**: Para la autenticación basada en tokens.
- **swagger-ui-express**: Para la documentación de la API.

Puedes encontrar todas las dependencias en el archivo `package.json`.

---

¡Gracias por tu interés en este proyecto! Si tienes alguna pregunta o sugerencia, no dudes en contactarme.