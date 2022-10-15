import axios from "axios"


const deleteUserId = (id : Number) => {

    axios.delete(`/api/delete/user/id/${id}`);

}

export { deleteUserId }