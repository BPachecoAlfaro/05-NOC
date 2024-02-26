import { envs } from "./envs.plugin"


describe('envs.plugin.ts', () => {

    test('should return env options', () => {

        expect( envs ).toEqual({

            PORT: 3000,
            MAILER_SERVICE: 'gmail',
            MAILER_EMAIL: 'bpachecoalfaro@gmail.com',
            MAILER_SECRET_KEY: '123456789',
            PROD: false,
            MONGO_URL: 'mongodb://bastian:123456789@localhost:27017',
            MONGO_DB_NAME: 'NOC-TEST',
            MONGO_USER: 'bastian',
            MONGO_PASS: '123456789',
            POSTGRES_URL: 'postgresql://postgres:123456789@localhost:5433/NOC-test',
            POSTGRES_USER: 'postgres',
            POSTGRES_PASSWORD: '123456789',
            POSTGRES_DB: 'NOC-TEST'
            
        });

    });

    test('should return error if not found env', async() => {

        jest.resetModules()
        process.env.port = 'ABC'
        
        try {
            await import('./envs.plugin');
            expect(true).toBe(false)

        } catch (error) {
            expect(`${ error }`).toContain('"PORT" should be a valid integer')
        }

    });


})