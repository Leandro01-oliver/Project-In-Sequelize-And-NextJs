import { NextApiRequest, NextApiResponse } from "next";
import { Evento } from "../../../../../../utils/database/models/evento";


const handlerGetEvento = async(
    req: NextApiRequest,
    res: NextApiResponse) => {
    if (req.method == 'GET') {
        
        const eventoAll = await Evento.findAll();
        
        res.status(200).json({
           data : eventoAll
        });
        
    }  
}

export default handlerGetEvento