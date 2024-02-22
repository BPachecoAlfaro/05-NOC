import { CheckService } from '../domain/use-cases/checks/check-service';
import { FileSystemDatasource } from '../infrastructure/datasources/file-system.datasource';
import { LogRepositoryImpl } from '../infrastructure/repositories/log.repository.impl';
import { envs } from '../config/plugins/envs.plugin';
import { CronService } from './cron/cron-service';
import { EmailService } from './email/email.service';

const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource()
)

export class Server {

    public static start() {

        console.log('Server started...');
        console.log( envs.MAILER_SECRET_KEY );

        // TODO: Mandar email

        // const emailService = new EmailService(
        //     fileSystemLogRepository
        // );
        // emailService.sendEmailWithFileSystemLogs(
        //     ['bpachecoalfaro@gmail.com','bpachecoalfaro2@gmail.com']
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