import { Component } from "@angular/core";
import{HttpClient} from "@angular/common/http";

@Component({
    selector:"irctc",
    template:`
    <h1 >Irctc</h1>
    <form (ngSubmit)="irctcCheck()">
    <div>PnrNo:<input [(ngModel)]=irt.pnrno name='pnrno' /></div>
    <button type="submit" >Go</button>
    <p>{{name}}</p>
    </form>
<style>
    h1{
        font-weight: normal; 
    }
</style>
`
})

export class Irctc{

    name:any;
    irt: Irt = new Irt();
    constructor (private http: HttpClient){

    }
    irctcCheck(){
        
        var url="http://localhost:8181/PhoneBookApi/app/Contacts"+this.irt.pnrno
        this.http.get(url).subscribe(data=>{
            console.log(data);
            for(let i of data.passengers) {
                this.name=i.name;
                alert(i.name);
            }
        })

    }

}
class Irt {
    pnrno:number;
}