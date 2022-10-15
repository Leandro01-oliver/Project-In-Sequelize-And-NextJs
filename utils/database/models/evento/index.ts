import {
    DataTypes
} from 'sequelize';
import { connecting } from "../../../../config/sequelize"

  const Evento =  connecting().define("tb_evento",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title:{
        type: DataTypes.STRING(150),
        allowNull: false
    },
    description:{
        type: DataTypes.STRING(150),
        allowNull: false
    }
})

Evento.sync()
.then((data)=>{
    console.log("Sucesso na criação da model de evento");
    console.log("Resultado : ", data);
})
.catch(()=>{
    console.log("Não foi possível criar a model de evento")
})

export { Evento }