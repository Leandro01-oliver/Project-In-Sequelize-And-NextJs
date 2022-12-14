import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../../../../utils/database/models/user";


const handlerGetUser = async(
    req: NextApiRequest,
    res: NextApiResponse) => {

        const {
            method
        } = req

        const {
            id
        } = req.query;
    
        if (method == 'GET') {
            
            const eventoId = await User.findByPk(id?.toString());
            
            res.status(200).json({
               data : eventoId
            });
    
        }   
}

export default handlerGetUser