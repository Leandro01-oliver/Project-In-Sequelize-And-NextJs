import { NextApiRequest, NextApiResponse } from "next";
import { Evento } from "../../../../../../utils/database/models/evento";


const handlerGetEventoAll = async(
    req: NextApiRequest,
    res: NextApiResponse) => {

    const {
        method
    } = req

    if (method == 'GET') {
        
        const eventoAll = await Evento.findAll();
        
        res.status(200).json({
           data : eventoAll
        });

    }  
}

export default handlerGetEventoAll