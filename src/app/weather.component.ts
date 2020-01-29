import { Component } from "@angular/core";
import{HttpClient} from "@angular/common/http";
import { stringify } from 'querystring';


@Component({
selector:'weather',
template:`
<h1 >Weather</h1>
<form (ngSubmit)="weatherCheck()">
<div>City:<input [(ngModel)]=weather.city name='city' /></div>
<button type="submit" >Login</button>
<p>{{token}}</p>
</form>

<style>
    h1{
        font-weight: normal; 
    }
</style>
`
})
export class WeatherComponent{

weather:Weather=new Weather();

    constructor (private http: HttpClient){

    }

    // weatherCheck(){
        
    //     let url="https://api.openweathermap.org/data/2.5/weather?q="+this.weather.city+"&appid=ae474d95aa5f9309cf90505bf1924a33";
    //     this.http.get(url).subscribe(data=>{
    //         console.log(data);
    //         alert(data.weather[0].description);
    //         alert(data.main.temp);
            
    //     })

    // }
}

class Weather{
    city:string;    
}



