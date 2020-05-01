import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiModule } from './Swagger';
import { HttpClientModule } from '@angular/common/http';
import { BurgerComponent } from './burger/burger.component';

@NgModule({
  declarations: [
    AppComponent,
    BurgerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

