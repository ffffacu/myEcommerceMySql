import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.1",
    info: {
      title: "Documentacion de mi Ecommerce",
      version: "1.0.0",
      description: "Ecommerce API"
    },
    servers: [
      {
        url: "https://myecommercemysql-production.up.railway.app",
        description: "Producción en Railway"
      },
      {
        url: "http://localhost:3000",
        description: "Entorno local"
      }
    ]
  },
  apis: ['./src/docs/**/*.yaml']
};



export const specs = swaggerJSDoc(swaggerOptions);