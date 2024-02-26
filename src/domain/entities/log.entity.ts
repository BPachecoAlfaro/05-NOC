export enum LogSeverityLevel {
    low = 'low',
    medium = 'medium',
    high = 'high',
}

export interface logEntityOptions {
    level: LogSeverityLevel; // Enum
    message: string
    createdAt?: Date;
    origin: string;
}


export class LogEntity {

    public level: LogSeverityLevel; // Enum
    public message: string
    public createdAt: Date;
    public origin: string;
    
    constructor( options: logEntityOptions ) {
        const { message, level, origin, createdAt = new Date() } = options;
        this.message = message;
        this.level = level;
        this.createdAt = new Date();
        this.origin = origin;
    }

    static fromJson = ( json: string ): LogEntity => {
        json = ( json === '') ? '{}': json;
        const { message, level, createdAt, origin } = JSON.parse( json );

        const log = new LogEntity( {
            message: message,
            level: level,
            createdAt: new Date(createdAt),
            origin: origin,
        } );

        return log;
    };

    static fromObject = ( object: { [key: string]: any }): LogEntity => {

        const { message, level, createdAt, origin } = object;
        const log = new LogEntity({
            message,
            level,
            createdAt,
            origin
        });
        return log;

    }

}