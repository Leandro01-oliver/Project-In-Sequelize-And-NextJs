import {
    DataTypes
} from 'sequelize';
import { connecting } from  '../../../../config/sequelize/index'

  const User = connecting().define("tb_user",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    sobreNome:{
        type: DataTypes.STRING(100),
        allowNull: false
    }
})

User.sync()
.then((data)=>{
    console.log("Sucesso na criação da model de user");
    console.log("Resultado : ", data);
})
.catch(()=>{
    console.log("Não foi possível criar a model de user")
})

export { User }