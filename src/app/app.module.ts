import { BrowserModule,Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PricingComponent } from './pricing/pricing.component';
import { Login } from './login/login.component';
import {RouterModule} from "@angular/router";
import {routing} from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgxCarouselModule} from "ngx-carousel";
import { LoginService } from "./login/login.services";
import {UserAuth} from "./shareService/usreAuth.service";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ServicesComponent,
    PortfolioComponent,
    PricingComponent,
    HomeComponent,
    Login,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    NgxCarouselModule
  ],
  providers: [
    UserAuth,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
