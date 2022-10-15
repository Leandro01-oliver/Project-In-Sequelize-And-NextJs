import axios from "axios";

const getEvento = (setDataEvento : any) =>{
   axios.get("api/get/all/")
   .then((res)=>{
    setDataEvento(res.data)
    })
    .catch(()=>{
    console.log("Não foi possível acessar o evento")
    })
}

export { getEvento }