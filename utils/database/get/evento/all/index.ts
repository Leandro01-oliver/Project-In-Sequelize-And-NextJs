import axios from "axios";

const getEventoAll = (setDataEvento : any) =>{
   axios.get("api/get/all/")
   .then((res)=>{
    setDataEvento(res.data)
    })
    .catch(()=>{
    console.log("Não foi possível acessar o evento")
    })
}

export { getEventoAll }