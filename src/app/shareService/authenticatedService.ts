import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from "@angular/router";

@Injectable()
export class authenticatedService implements CanActivate {
    constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    // 返回值 true: 跳转到当前路由 false: 不跳转到当前路由
    return false  // 不让它跳到个人中心页面
  }
}
