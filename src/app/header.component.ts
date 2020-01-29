import { Component } from '@angular/core';

@Component({
    selector:"header",
    template:`
    <div>
    <h1>www.LearnAngular.com</h1>
    </div>
    
    `,
    styles:['div{ background-color: lightseagreen}']
})
export class Header{
    show(){
        alert("aaya")
    }

}