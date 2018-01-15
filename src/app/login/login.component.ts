import { Component } from '@angular/core';
import { Http, URLSearchParams, Jsonp } from '@angular/http';

import { LoginService } from './login.service';
import { Location } from '@angular/common';
import { error } from 'util';
@Component({
    selector: 'my-login',
    providers: [ LoginService ],
    template: `
    <div>
        <form (ngSubmit)="doLogin()">
            <div>
                <label>ログインID:</label>
                <input type="text" name="loginId" [(ngModel)]="loginId" />
            </div>
            <div>
                <label>ログインパスワード:</label>
                <input type="password" name="loginPassword" [(ngModel)]="loginPassword" />
            </div>
            <div>
                <input type="submit" value="ログイン" />
            </div>
        </form>
    </div>

    <input type="button" (click)="goLogin()" value="ログイン" />
    `
})

export class LoginComponent {

    public loginId = "internous";
    public loginPassword = "internous01";

    constructor(
        private loginService: LoginService
    ) {}

    public goLogin() {
        this.loginService.getLoginUserInfo()
        .then(
            response => {
                console.log(response);
            }
        )
        .catch(
            error => {
                alert("error");
            }
        );
    }

    public doLogin() {
        this.loginService.getLoginUser()
        .then(
            response => {
                console.log(response)
            }
        )
        .catch(
            error => {
                alert("error");
            }
        );
    }
}