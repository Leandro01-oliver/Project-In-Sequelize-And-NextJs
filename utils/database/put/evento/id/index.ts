import axios from "axios"


const putEventoId = (id : Number) => {

    var title = "Paulo com edição 2"
    // var title = null;
    // var description = "João com edição 2";
    var description = null;

    axios.put(`/api/put/evento/id/${id}`,{
        title: title,
        description: description
    });

}

export { putEventoId }