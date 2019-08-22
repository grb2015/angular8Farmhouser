import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from "@angular/router";
import { ConstValueService } from "../shareService/constValue.service";  /*  奇怪这里需要../ 不是在同一目录吗? */



@Injectable()
export class authenticatedService implements CanActivate {
    constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    // 返回值 true: 跳转到当前路由 false: 不跳转到当前路由
    console.log("authenticatedService g_is_login_in =  ")
    console.log(ConstValueService.g_is_login_in)
    if(ConstValueService.g_is_login_in == false){
      this.router.navigateByUrl("login");
    }
    else{
      return true
    }
  }
}
