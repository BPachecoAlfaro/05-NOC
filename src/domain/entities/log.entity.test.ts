import { LogEntity, LogSeverityLevel } from "./log.entity";

describe('log.entity.ts', () => {

    const dataObje = {
        message: 'Hola Mundo',
        level: LogSeverityLevel.high,
        origin: 'log.entity.test.ts'
    }

    test('should create a LogEntity instance', () => {

    
        const log = new LogEntity({
            message: 'Hola Mundo',
            level: LogSeverityLevel.high,
            origin: 'log.entity.test.ts'
        });

        expect( log ).toBeInstanceOf( LogEntity );
        expect( log.message ).toBe( dataObje.message );
        expect( log.level ).toBe( dataObje.level );
        expect( log.origin ).toBe( dataObje.origin );
        expect( log.createdAt ).toBeInstanceOf( Date );
        

    });

    test('should create a LogEntity instance from json', () => {

        const json = `{"message":"Service http://google.com/ working","level":"low","createdAt":"2024-02-23T15:14:05.075Z","origin":"check-service.ts"}`

        const log = LogEntity.fromJson( json );
        
        expect( log ).toBeInstanceOf( LogEntity );
        expect( log.message ).toBe( "Service http://google.com/ working" );
        expect( log.level ).toBe( LogSeverityLevel.low );
        expect( log.origin ).toBe( "check-service.ts" );
        expect( log.createdAt ).toBeInstanceOf( Date );


    });

    test('should create a LogEntity from object', () => {

        const log = LogEntity.fromObject(dataObje);

        expect( log ).toBeInstanceOf( LogEntity );
        expect( log.message ).toBe( dataObje.message );
        expect( log.level ).toBe( dataObje.level );
        expect( log.origin ).toBe( dataObje.origin );
        expect( log.createdAt ).toBeInstanceOf( Date );

    })

});