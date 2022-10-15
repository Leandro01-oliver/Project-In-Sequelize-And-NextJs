import { NextApiRequest, NextApiResponse } from "next";
import { Evento } from "../../../../../../utils/database/models/evento";


const handlerGetEvento = async(
    req: NextApiRequest,
    res: NextApiResponse) => {

    const {
        id
    } = req.query;

    if (req.method == 'GET') {
        
        const eventoId = await Evento.findByPk(id?.toString());
        
        res.status(200).json({
           data : eventoId
        });

    }  
}

export default handlerGetEvento