import { Injectable } from "@angular/core";

@Injectable({
    //when we want the same instance of the service class throughout the entire application we provide service in app.module.ts file
    // instead of that we also can do this

    providedIn: 'root'
})
export class LoggerService{
    logMessage(name:string, status: string){
        console.log(`The new user with name ${name} and status ${status} is joined.`)
    }
}