import { NextApiRequest, NextApiResponse } from "next";
import { connecting } from "../../../../../config/sequelize";
import { Evento } from "../../../../../utils/database/models/evento";

const handlerPostEvento = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {

    const {
        method
    } = req

    const { 
        title,
        description
    } = req.body;

    console.log("Valor de titulo : ",title);

    console.log("Valor de descrição : ",description);

    if (method == 'POST') {

        setTimeout(async()=>{
            const evento = await Evento.create({
                title,
                description
            })
    
            res.status(201).json({
                data: evento
            });
        },2000)
    }
}

export default handlerPostEvento;