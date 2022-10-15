import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../../../../utils/database/models/user";


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
        nome,
        sobreNome
    } = req.body;

    console.log("Valor de Nome : ", nome);

    console.log("Valor de Sobre Nome : ", sobreNome);
    
    if (method == 'PUT') {
        
        if(nome != null && sobreNome != null){
            const eventoId = await User.update({
                nome, sobreNome
            }, {
                where: {
                    id
                }
            });
    
            res.status(200).json({
                data: eventoId
            });
        }else if(nome != null){
            const eventoId = await User.update({
                nome
            }, {
                where: {
                    id
                }
            });
    
            res.status(200).json({
                data: eventoId
            });
        }else if(sobreNome != null){
            const eventoId = await User.update({
                sobreNome
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