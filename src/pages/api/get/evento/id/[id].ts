import { NextApiRequest, NextApiResponse } from "next";
import { Evento } from "../../../../../../utils/database/models/evento";


const handlerGetEventoId = async(
    req: NextApiRequest,
    res: NextApiResponse) => {

    const {
        method
    } = req

    const {
        id
    } = req.query;

    if (method == 'GET') {
        
        const eventoId = await Evento.findByPk(id?.toString());
        
        res.status(200).json({
           data : eventoId
        });

    }  
}

export default handlerGetEventoId