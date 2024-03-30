import { Injectable } from "@angular/core";
import { Newuser } from "../Models/Newuser";
import { LoggerService } from "./logger.service";

@Injectable()
export class UserService{
    user: Newuser[] = [
        new Newuser("smith", "male", "monthly", "active"),
        new Newuser("John","male", "yearly", "inactive"),
    ] 
    constructor(private logger: LoggerService){

    }
    GetAllUsers(){
        return this.user;
    }

    createNewUser(name: string, gender: string, subType: string, status: string){
        let newuser = new Newuser(name, gender, subType, status);
        this.logger.logMessage(name, status);
        this.user.push(newuser);
    } 
    
    
}