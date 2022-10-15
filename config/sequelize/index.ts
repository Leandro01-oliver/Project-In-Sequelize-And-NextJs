import { Sequelize } from 'sequelize';
import { configDb } from './dbConfig';

const connecting = () =>{
    let re;
   if (process.env.DEFINE_DESENV_TEST == 'test'){
      const db = new Sequelize(
         configDb.test.database!, 
         configDb.test.username!,
         configDb.test.password!, 
         {
            dialect: "mysql",
            host: configDb.test.host
         }
      );
      db.authenticate()
      .then(()=>{
         console.log("Sucesso na conexão com o sql");
      })
      .catch(()=>{
         console.log("Não foi possível se conectar ao sql")
      })
      re = db;
   }else if (process.env.DEFINE_DESENV_PRODUCTION == 'production'){
      const db = new Sequelize(
         configDb.production.database!, 
         configDb.production.username!,
         configDb.production.password, 
         {
            dialect: "mysql",
            host: configDb.production.host
         }
      );
      db.authenticate()
      .then(()=>{
         console.log("Sucesso na conexão com o sql");
      })
      .catch(()=>{
         console.log("Não foi possível se conectar ao sql")
      })
      re = db;
   }else{
      const db = new Sequelize(
         configDb.development.database!, 
         configDb.development.username!,
         configDb.development.password, 
         {
            dialect: "mysql",
            host: configDb.development.host
         }
      );;
      db.authenticate()
      .then(()=>{
         console.log("Sucesso na conexão com o sql");
      })
      .catch(()=>{
         console.log("Não foi possível se conectar ao sql")
      })
      re = db;
   }
   return re;
}

export { connecting }

