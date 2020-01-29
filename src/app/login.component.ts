import { Component } from "@angular/core";
import { NgIf } from '@angular/common';
import{HttpClient} from '@angular/common/http';
import { stringify } from 'querystring';

@Component({
selector:"login",
templateUrl:'../assets/screens/login.component.html',

 

})
 
export class LoginComponent{
    login:Login=new Login();

    constructor (private http: HttpClient){

    }

    loginCheck(){
        var token;
        let url="https://reqres.in/api/login";
        this.http.post(url,this.login).subscribe(data=>{
            //this.token=JSON.stringify(this.login);
        })


    }
}
class Login{
    email:string;
    password:string;
    responce:string;
}