import { NextApiRequest, NextApiResponse } from "next";
import { Evento } from "../../../../../../utils/database/models/evento";


const handlerDeleteEventoId = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {

    const {
        method
    } = req

    const {
        id
    } = req.query;

    if (method === 'DELETE') {
        
        const eventoId = await Evento.destroy({
            where:{
                id
            }
        });

        res.status(200).json({
           data : eventoId
        });
        
    }  
}

export default handlerDeleteEventoId;