import axios from "axios"

const tableEvento =  () => {

   let title = "Paulo"
   let description = "João";

   axios.post("api/post/evento/",{
      title: title,
      description: description
   })
}

export { tableEvento }