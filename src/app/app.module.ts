import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { JsonpModule, HttpModule } from '@angular/http';
 
import { AppComponent }  from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, JsonpModule ],
  declarations: [ AppComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
