import { NextApiRequest, NextApiResponse } from "next";
import { connecting } from "../../../../../config/sequelize";
import { User } from "../../../../../utils/database/models/user";


const handlerPostUser = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {

    const {
        method
    } = req

    const { 
        nome,
        sobreNome
    } = req.body;

    console.log("Valor de Nome : ",nome);

    console.log("Valor de Sobre Nome : ",sobreNome);

    if (method == 'POST') {

        setTimeout(async()=>{
            const user = await User.create({
                nome,
                sobreNome
            });
    
            res.status(201).json({
                data: user
            });
        },2000)
        
    }
}

export default handlerPostUser