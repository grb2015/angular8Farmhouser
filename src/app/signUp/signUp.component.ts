import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import {httpservice } from "../shareService/httpsevice";
import 'style-loader!./signUp.scss';
import { UserAuth } from "../shareService/usreAuth.service";
// import { Md5 } from "ts-md5/dist/md5";
import { Router } from "@angular/router";
import * as myGlobals from '../shareService/globals';
import {CacheService} from "../shareService/cache.service";
import {Md5} from "ts-md5";
declare var $: any;

@Component({
  selector: 'signUp',
  templateUrl: './signUp.html',
  styleUrls: ["./signUp.scss"]
})
export class signUp implements OnInit {

  public form: FormGroup;
  public userName: AbstractControl;
  public password: AbstractControl;
  public passwords: FormGroup;
  public submitted: boolean = false;

  constructor(private cache: CacheService,private router: Router, private fb: FormBuilder,private backendApi: httpservice,private userAuth: UserAuth) {
    this.form = fb.group({
      'userName': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      })
    });

    this.userName = this.form.controls['userName'];
    this.passwords = <FormGroup>this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.form.valueChanges.subscribe(() => {
    });
  }

  ngOnInit() {
    this.cache.printAllcache();
    if (this.cache.getCache(this.cache._isLogin)) {
      console.log("已登陆");
      this.router.navigateByUrl("/home");
    }
  }

  public onSubmitSignUp(): void {
    if (this.form.valid) {
      let temp = { type: "login" };
      temp["userName"] = this.delete_space(this.userName.value);
      temp["password"] = Md5.hashStr(this.password.value).toString();
      // temp["password"] = this.password.value
      this.submitted = true;
      if (this.form.valid) {
        this.backendApi.sign_up(temp).subscribe(
          (data) => {
            console.log("data.json().result")
            console.log(data.json().result)
            if (data.json().result) {
              this.router.navigateByUrl("home");
            }
            else{
              alert("注册失败 !")
            }
          },
          (error) => {
            console.log(" 注册出错,请检查网络正常且后端服务器已开启!")
            alert(" 注册出错,请检查网络正常且后端服务器已开启!")
          },
          () => {
          }
        );
      }
    }
  }

  //删除左右两端的空格
  delete_space(str){ 
    　　     return str.replace(/(^\s*)|(\s*$)/g, "");
    　　 }
}
