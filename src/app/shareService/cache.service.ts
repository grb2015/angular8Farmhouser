/*
   前端的localStore全局变量。
*/
import {Injectable} from "@angular/core";

@Injectable()
export class CacheService {

  public _loginUser = "loginUser"  //当前登录的用户名  初始化为false,在登陆成功后设置为true,退出登录后设置为false,其它时间不应该设置该值
  public _isLogin = "isLogin"     //标志是否登录    初始化为false,在登陆成功后设置为true,退出登录后设置为false,其它时间不应该设置该值


  hasCache(key: string): boolean {
    let test = localStorage.getItem(key);
    if (test === null || JSON.stringify("") === test) {
      return false;
    }
    else {
      return true;
    }
  }

  getCache(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  /*********************************************************************************
   *  breif   :   设置cache
   *  input   :   key     [string]  cache的键
   *              value   [any]     可为bool类型,string类型,int类型
   *  return  :   无
   *  note    :   1.value无论哪种数据类型,都转为str类型保存在cache中(TODO:是否区分数据类型)
   *
   ************************************************************************************/
  setCache(key: string, value: any) {
    console.log("setCache begin ,key = %s,value = %s", key, JSON.stringify(value));
    // localStorage.setItem(key,value);
    localStorage.setItem(key, JSON.stringify(value));

  }


  /*********************************************************************************
   *  breif   :   打印所有cache
   *  input   :   无
   *  return  :   无
   *
   ************************************************************************************/
  printAllcache() {
    console.log(' isLogin value  = ', this.getCache(this._isLogin))
    console.log(' loginUser value = ', this.getCache(this._loginUser))
  }


}
