import axios from "axios"


const deleteEventoId = (id : Number) => {

    axios.delete(`/api/delete/evento/id/${id}`);

}

export { deleteEventoId }