import { CheckService } from '../domain/use-cases/checks/check-service';
import { FileSystemDatasource } from '../infrastructure/datasources/file-system.datasource';
import { LogRepositoryImpl } from '../infrastructure/repositories/log.repository.impl';
import { envs } from '../config/plugins/envs.plugin';
import { CronService } from './cron/cron-service';
import { EmailService } from './email/email.service';
import { SendEmailLogs } from '../domain/use-cases/email/send-email-logs';

const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource()
);
const emailService = new EmailService();


export class Server {

    public static start() {

        console.log('Server started...');

        // TODO: Mandar email
        new SendEmailLogs(
            emailService,
            fileSystemLogRepository,
        ).execute(
            ['xxxxxxxxx@gmail.com','xxxxxxxx@gmail.com']
            )
        
        // emailService.sendEmailWithFileSystemLogs(
        //     ['bpachecoalfaro@gmail.com','ambar.aguilar.c@gmail.com']
        // );

        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const url = 'http://localhost:3000/';
        //         new CheckService(
        //             fileSystemLogRepository,
        //             () => console.log( `${ url } is ok` ),
        //             ( error )  => console.log( error ),
        //         ).execute( url );
        //         // new CheckService().execute( 'http://localhost:3000/');


                

        //     }
        // );
    }
}