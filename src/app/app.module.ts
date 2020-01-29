import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { Header } from './header.component';
import { Lucky } from './lucky-number.component';
import { Calculator } from './calculator.comonent';
import { Name } from './name.component';
import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './weather.component';
import { Irctc } from './irctc.component';


@NgModule({
  declarations: [
    AppComponent,
    Header,
    Lucky,
    Calculator,
    Name,
    LoginComponent,
    WeatherComponent,
    Irctc
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
