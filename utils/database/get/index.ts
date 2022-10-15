import axios from "axios";

const getEvento = (setData : any) =>{
   axios.get("api/get/all/")
   .then((res)=>{
    setData(res.data)
    })
    .catch(()=>{
    console.log("Não foi possível acessar o evento")
    })
}

export { getEvento }