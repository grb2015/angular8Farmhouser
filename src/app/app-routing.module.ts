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

const routes: Routes = [
  { path: '', component: Login },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: Login}
  
];



export const routing: ModuleWithProviders = RouterModule.forRoot(routes);



