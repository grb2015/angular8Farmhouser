import {ModuleWithProviders, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {ContactComponent} from "./contact/contact.component";
import {ServicesComponent} from "./services/services.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {PricingComponent} from "./pricing/pricing.component";
import {HomeComponent} from "./home/home.component";
import {Login} from "./login/login.component";
import {signUp} from "./signUp/signUp.component";
import {personsettingComponent} from "./personsetting/personsetting.component";
import { authenticatedService } from './shareService/authenticatedService';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: Login},
  { path: 'signUp', component: signUp},
  { path: 'personsetting', component: personsettingComponent,canActivate: [authenticatedService] }
  
];



export const routing: ModuleWithProviders = RouterModule.forRoot(routes);



