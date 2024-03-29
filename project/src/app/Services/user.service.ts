import { Newuser } from "../Models/Newuser";

export class UserService{
    user: Newuser[] = [
        new Newuser("smith", "male", "monthly", "active"),
        new Newuser("John","male", "yearly", "inactive"),
    ] 

    GetAllUsers(){
        return this.user;
    }

    createNewUser(name: string, gender: string, subType: string, status: string){
        let newuser = new Newuser(name, gender, subType, status);

        this.user.push(newuser);
    } 
    
    
}