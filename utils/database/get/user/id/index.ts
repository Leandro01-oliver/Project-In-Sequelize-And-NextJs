import axios from "axios";

const getUserId = (id : Number, setDataUser: any) =>{
   axios.get(`api/get/id/${id}`)
   .then((res)=>{
     setDataUser(res.data)
    })
    .catch(()=>{
    console.log("Não foi possível acessar o user")
    })
}

export { getUserId }