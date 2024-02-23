import 'dotenv/config';
import { Server } from "./presentation/server";
import { envs } from './config/plugins/envs.plugin';
import { LogModel, MongoDatabase } from './data/mongo';


(async() => {
    main()
})();


async function main(){
    
    await MongoDatabase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME,
    });

    // // Crear un coleccion = tables, | documento = registro
    // const newLog = await LogModel.create({
    //     message: 'Test message desde Mongo',
    //     orign: 'App.ts',
    //     level: 'low',
    // });

    // await newLog.save();
    // console.log( newLog );
    // const logs = await LogModel.find();
    // console.log( logs[1]);

    Server.start()
    // console.log( envs );

};