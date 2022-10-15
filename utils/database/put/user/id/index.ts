import axios from "axios"


const putUserId = (id : Number) => {

    var nome = "Paulo com edição 2"
    // var nome = null
    // var sobreNome = "João com edição";
    var sobreNome = null;

    axios.put(`/api/put/user/id/${id}`,{
        nome: nome,
        sobreNome: sobreNome
    });

}

export { putUserId }