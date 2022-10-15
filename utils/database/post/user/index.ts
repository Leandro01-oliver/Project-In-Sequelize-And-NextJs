import axios from "axios"

const tableUser =   () => {

   var nome = "Paulo"
   var sobreNome = "João";
   
   axios.post("api/post/user/",{
      nome: nome,
      sobreNome: sobreNome
   })
}

export { tableUser }