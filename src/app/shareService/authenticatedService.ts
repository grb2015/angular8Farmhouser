import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from "@angular/router";
import { ConstValueService } from "../shareService/constValue.service";  /*  奇怪这里需要../ 不是在同一目录吗? */
// import { UserAuth } from "../shareService/usreAuth.service"; 
import * as grbGlobals from '../shareService/globals';
import {CacheService} from "../shareService/cache.service";




@Injectable()
export class authenticatedService implements CanActivate {
    constructor(private router: Router,private cache:CacheService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    // 返回值 true: 跳转到当前路由 false: 不跳转到当前路由
  //   console.log("grbGlobals g_is_login_in =  ")
  //   console.log(grbGlobals.g_is_login_in)
  //   if(grbGlobals.g_is_login_in == false){
  //     this.router.navigateByUrl("login");
  //   }
  //   else{
  //     return true
  //   }

    let isLogin = this.cache.getCache(this.cache._isLogin);
    // let userAuthStr = this.cache.getCache(this.cache._userAuthStr);
    // console.log("  canActivate  userAuthStr =");
    // console.log(userAuthStr)
    // if(isLogin && userAuthStr.indexOf(route.routeConfig.path)!==-1){
    if(isLogin){
      return true;
    }
    else if(isLogin !== true){
      alert("请先登录");
      this.router.navigate(["login"]);
      return false;
    }
    else{
      alert("无权访问该路径");
      this.router.navigate(["login"]);
      return false;
    }

  }
}
