import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { ConstValueService } from "../shareService/constValue.service";
// import { ExpressionSettingModel } from "./expressionSettingModel";
import { Http, Headers } from "@angular/http";

@Injectable()
export class LoginService {

    private loginUrl = ConstValueService.newSeedapiUrl + "/login/";
    private signUpUrl = ConstValueService.newSeedapiUrl + "/sign_up/";

    constructor(private _http: Http) { }

    /**
     * 登录
     */
    login(info) {
        // 这边要注意json需要严格模式的json格式
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        // 初次登录 或者cookie过期
        let json = JSON.stringify(info);
        console.log("login");
        return this._http.post(this.loginUrl, json, { headers: headers, withCredentials: true });

    }


    /*################################################################################## 
    #   breif   ：  用户注册
    #   input   :   userName   [string]     用户名
    #               password   [string]     md5加密后的密码
    #   returns : [json]      {"result":xx,"data":'xxxx'}
    #                           result :        bool    值为True/False 表明是否执行成功
    #                          data:  string  给前端的附带信息 
    #                           # 1.若result为True , data 为空
    #                           # 2.若result为False, data为错误信息
    ##################################################################################*/
    sign_up(info){
                let headers = new Headers();
                headers.append('Content-Type', 'application/json');
                headers.append('Accept', 'application/json');
                let json = JSON.stringify(info);
                console.log("sign_up");
                return this._http.post(this.signUpUrl, json, { headers: headers, withCredentials: true });
    }
    
}
