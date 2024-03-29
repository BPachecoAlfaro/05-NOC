import { CheckService } from '../domain/use-cases/checks/check-service';
import { FileSystemDatasource } from '../infrastructure/datasources/file-system.datasource';
import { LogRepositoryImpl } from '../infrastructure/repositories/log.repository.impl';
import { envs } from '../config/plugins/envs.plugin';
import { CronService } from './cron/cron-service';
import { EmailService } from './email/email.service';
import { SendEmailLogs } from '../domain/use-cases/email/send-email-logs';
import { MongoLogDataSource } from '../infrastructure/datasources/mongo-log.datasource';
import { LogSeverityLevel } from '../domain/entities/log.entity';
import { PostgreLogDatasource } from '../infrastructure/datasources/postgre-log.datasource';
import { CheckServiceMultiple } from '../domain/use-cases/checks/check-service-multiple';

const fsLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource(),
);

const mongoLogRepository = new LogRepositoryImpl(
    new MongoLogDataSource(),
);

const postgresLogRepository = new LogRepositoryImpl(
    new PostgreLogDatasource(),
);

const emailService = new EmailService();


export class Server {

    public static async start() {

        console.log('Server started...');

        // // TODO: Mandar email
        // new SendEmailLogs(
        //     emailService,
        //     fileSystemLogRepository,
        // ).execute(
        //     ['xxxxxxxxx@gmail.com','xxxxxxxx@gmail.com']
        //     )
        
        // emailService.sendEmailWithFileSystemLogs(
        //     ['bpachecoalfaro@gmail.com','ambar.aguilar.c@gmail.com']
        // );

        // const logs = await logRepository.getLogs(LogSeverityLevel.low);
        // console.log( logs );

        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const url = 'http://googadadadsle.com/';
        //         new CheckServiceMultiple(
        //             [fsLogRepository, postgresLogRepository, mongoLogRepository],
        //             () => console.log( `${ url } is ok` ),
        //             ( error )  => console.log( error ),
        //         ).execute( url );
        //         // new CheckService().execute( 'http://localhost:3000/');

        //     }
        // );
    }
}