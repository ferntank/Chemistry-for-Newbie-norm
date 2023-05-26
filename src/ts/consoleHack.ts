export default class ConsoleHack {
    entries: Array<any>;
    log: Function;
    error: Function;
    warn: Function;
    debug: Function;
    private createEntry(type:string,args:Array<IArguments>):void{this.entries.push({type:type,datetime:Date().toLocaleLowerCase(),value:args})}
    constructor() {
        this.entries = [];
        this.log = console.log.bind(console);
        this.error = console.error.bind(console);
        this.warn = console.warn.bind(console);
        this.debug = console.debug.bind(console);
        console.log = (): void => {
            const args: Array<IArguments> = Array.from(arguments)
            this.createEntry('log', args);
            this.log.apply(console, args);
        };
        console.error = (): void => {
            const args: Array<IArguments> = Array.from(arguments)
            this.createEntry('error', args);
            this.error.apply(console, args);
        };
        console.warn = (): void => {
            const args: Array<IArguments> = Array.from(arguments)
            this.createEntry('warn', args);
            this.warn.apply(console, args);
        };
        console.debug = (): void => {
            const args: Array<IArguments> = Array.from(arguments)
            this.createEntry('debug', args);
            this.debug.apply(console, args);
        }
    }
}
