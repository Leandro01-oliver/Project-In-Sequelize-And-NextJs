import { NextApiRequest, NextApiResponse } from "next";
import { Evento } from "../../../../../../utils/database/models/evento";


const handlerPutEventoId = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {

    const {
        method
    } = req

    const {
        id
    } = req.query;

    const {
        title,
        description
    } = req.body;

    console.log("Valor de titulo : ", title);

    console.log("Valor de descrição : ", description);

    if (method == 'PUT') {

        if(title != null && description != null){
            const eventoId = await Evento.update({
                title, description
            }, {
                where: {
                    id
                }
            });
    
            res.status(200).json({
                data: eventoId
            });
        }else if(title != null){
            const eventoId = await Evento.update({
                title
            }, {
                where: {
                    id
                }
            });
    
            res.status(200).json({
                data: eventoId
            });
        }else if(description != null){
            const eventoId = await Evento.update({
                description
            }, {
                where: {
                    id
                }
            });
    
            res.status(200).json({
                data: eventoId
            });

      }else{
         res.status(404).json({
            menssage: "Ambos os objetos vieram nullos, não sendo possível salvar"
         })
      }
    }
}

export default handlerPutEventoId;