import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../../../../utils/database/models/user";


const handlerGetUser = async(
    req: NextApiRequest,
    res: NextApiResponse) => {

    const {
        method
    } = req

    if (method == 'GET') {

        const userAll = await User.findAll();

         res.status(200).json({
            data : userAll
         });

    }  
}

export default handlerGetUser