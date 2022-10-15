import axios from "axios";

const getEventoId = (id : Number, setDataEvento: any) =>{
   axios.get(`api/get/id/${id}`)
   .then((res)=>{
    setDataEvento(res.data)
    })
    .catch(()=>{
    console.log("Não foi possível acessar o evento")
    })
}

export { getEventoId }