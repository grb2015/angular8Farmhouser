import { Component, OnInit } from '@angular/core';
import {CacheService } from "../shareService/cache.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public cache: CacheService,public router:Router) { }

  ngOnInit() {
  }

  logoutSubmit(){
    console.log("logout ,清空已登陆信息")
    this.cache.setCache(this.cache._isLogin,false);
    this.cache.setCache(this.cache._loginUser,"");
    this.router.navigateByUrl("/home");
    // this.cache.setCache(this.cache._userAuthStr,"");
  }

}
