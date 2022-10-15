import axios from "axios";

const getUserAll = (setDataUser : any) =>{
   axios.get("api/get/all/")
   .then((res)=>{
    setDataUser(res.data)
    })
    .catch(()=>{
    console.log("Não foi possível acessar o user")
    })
}

export { getUserAll }