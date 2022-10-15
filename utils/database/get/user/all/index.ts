import axios from "axios";

const getUserAll = () =>{
   axios.get("api/get/user/all/")
   .then((res)=>{
    // setDataUser(res.data)
    console.log(res.data.data)
    })
    .catch(()=>{
    console.log("Não foi possível acessar o user")
    })
}

export { getUserAll }