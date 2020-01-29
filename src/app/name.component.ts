import { Component } from "@angular/core";
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { UpperCasePipe } from '@angular/common';

@Component({
selector:"name",
template:`
<h1 >Name Conversion</h1>

Enter your name<input [(ngModel)]=name name='name'/><br/>
<button type="submit">Get in Capital</button>
Name:{{name| uppercase}}

`,
styles: ['h1 { font-weight: normal; }']
})
export class Name{
name:string;


}