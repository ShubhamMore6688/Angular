export class LoggerService{
    logMessage(name:string, status: string){
        console.log(`The new user with name ${name} and status ${status} is joined.`)
    }
}