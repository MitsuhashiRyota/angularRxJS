// 最低限必要なもの？
import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { error } from 'selenium-webdriver';

@Injectable()
export class SpringService {

   // Jsonpサービスをインスタンス化
    // まずはコンストラクタで必要なクラスのインスタンスを生成
    constructor(private jsonp: Jsonp) { }
    
        // Http(Jsonp)Get通信の戻り値は必ずObservable型
        requestGet(url: string): Observable<any> {
            let param = new URLSearchParams();
            param.set('url', url);
            param.set('callback', 'JSONP_CALLBACK');
     
            return this.jsonp.get('http://localhost:8080/sampleApi/?loginId=internous&loginPassword=internous01/', {search: param})
            .map(response => {
                alert("成功");
             })
            .catch(error => {
                alert("失敗");
                return Observable.throw(error.status);
            });
        }
    }