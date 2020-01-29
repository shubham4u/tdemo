import { Component } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
    selector:"lucky",
    template:`
    <h1 >Lucky Number</h1>

    <button (click)="show()"> Click here</button> to know your lucky number.
    
    <p *ngIf="ln">{{ln}} is your lucky number.</p>
 
    
    `,
    styles: ['h1 { font-weight: normal; }']

})
export class Lucky{
    ln:number;
        show(){
            this.ln=Math.round(Math.random()*10);
            
        }

}