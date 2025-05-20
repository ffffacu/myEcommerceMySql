import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions ={
    swaggerDefinition: {
        openapi:"3.0.1",
        info:{
            title:"Documentacion de mi Ecommerce",
            version:"1.0.0",
            description: "Ecommerce API"
        }
    },
        apis:['./src/docs/**/*.yaml']
}


export const specs = swaggerJSDoc(swaggerOptions);