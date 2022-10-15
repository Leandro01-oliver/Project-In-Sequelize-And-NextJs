import axios from "axios";

const getEventoAll = () =>{
   axios.get("api/get/evento/all/")
   .then((res)=>{
    // setDataEvento(res.data)
    console.log(res.data)
    })
    .catch(()=>{
    console.log("Não foi possível acessar o evento")
    })
}

export { getEventoAll }