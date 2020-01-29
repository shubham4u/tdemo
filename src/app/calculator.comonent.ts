import { Component } from "@angular/core";
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
selector: "calculator",
template:`

<h1 >Calculator</h1>
<div id ="calform">
<form>
Enter first number:<input [(ngModel)]=no1 name='no1' type='number'/><br/>
Enter first number:<input [(ngModel)]=no2 name='no2' type='number'/><br/>
<button type=submit (click)="add()">+</button>
<button type=submit (click)="sub()">-</button>
<p *ngIf="result">result = {{result}}</p>
</form>
</div>
`,
styles: ['h1 { font-weight: normal; }']
})
export class Calculator{
    no1:number;
    no2:number;
    result:number;

    add(){
           this.result=this.no1+this.no2;       
    }
    
    sub(){
        this.result=this.no1-this.no2;

    }
}