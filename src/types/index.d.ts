
import "express";

declare module "express" {
    export interface Request {
        productCart?: any[];
    }
}
