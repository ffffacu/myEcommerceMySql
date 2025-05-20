"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.specs = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
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
exports.specs = (0, swagger_jsdoc_1.default)(swaggerOptions);
