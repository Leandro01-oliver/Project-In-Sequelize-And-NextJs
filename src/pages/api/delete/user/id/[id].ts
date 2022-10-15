import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../../../../utils/database/models/user";


const handlerDeleteUserId = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {

    const {
        method
    } = req

    const {
        id
    } = req.query;


    if (method == 'DELETE') {
        
        const userId = await User.destroy({
            where: {
                id
            }
        });

        res.status(200).json({
           data : userId
        });
        
    }  
}

export default handlerDeleteUserId