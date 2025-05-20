import jwt from "jsonwebtoken";
import config from "../config/config";
import {v4 as uuidv4} from "uuid";


export const createToken = () =>{
    const sessionId = uuidv4();
    const token = jwt.sign({ sessionId }, config.SECRET_CODE, { expiresIn: "2h" });
    return token;
}

export const verifyToken = (token:string) => {
    try {
        const decode = jwt.verify( token, config.SECRET_CODE)
        return decode
    } catch (error) {
        return error
    }
}
