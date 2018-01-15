import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { LoginParam } from '../param/login.param';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
    private heroesUrl = 'http://localhost:8080/loginApi/info/';

    private apiUrl = 'http://localhost:8080/loginApi/login/';
    private loginId = 'internous';
    private loginPassword = 'internous01';

    private url = `${this.apiUrl}${this.loginId}/${this.loginPassword}`;
    constructor(
        private _http: Http
    ) {}

    public getLoginUserInfo(): Promise<LoginParam> {
        return this._http.get(this.heroesUrl)
        .toPromise()
        .then(response => { return response.json() as LoginParam })
        .catch(error => { return error.status});
/*
        let param = new URLSearchParams();
        param.set('loginId', loginId);
        param.set('loginPassword', loginPassword);
*/
    }

    public getLoginUser(): Promise<LoginParam> {
        return this._http.get(this.url)
        .toPromise()
        .then(response => {
            return response.json() as LoginParam
        })
        .catch(error => {
            return error.status
        });
    }
}