import bcrypt from "bcrypt";

export const createHash = (password:string) =>{
    return bcrypt.hashSync(password,bcrypt.genSaltSync(10));
}

export const isValidPassword =  (userPassword:string , password:string ) =>{
    return bcrypt.compareSync(userPassword,password);
}