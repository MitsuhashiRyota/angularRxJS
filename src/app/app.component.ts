import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { Http, Jsonp, URLSearchParams } from '@angular/http';
import { HatenaService } from './hatena.service';
import { SpringService } from './spring.service';
import { HeroService } from './hero.service';

import { read } from 'fs';
import { error } from 'util';
import { SIGPROF } from 'constants';
import { Response } from '@angular/http/src/static_response';

@Component({
  selector: 'my-app',
  providers: [ HatenaService, SpringService, HeroService ],
  template: `
  <form>
    <input type="url" name="url" size="50" [(ngModel)]="url" />
    <input type="button" (click)="onclick()" value="送信" />
  </form>
  <div>{{count}}件</div>
  <ul>
    <li *ngFor="let com of comments">{{com}}</li>
  </ul>

  <input type="button" (click)="onchenge()" value="GoSpring" />

  <div>
    <my-login></my-login>
  </div>
  `,
})
export class AppComponent  {
  
  // フィールド変数定定義
  public url = 'http://gihyo.jp/'
  public javaParam = 'java';
  public count = 0;
  public comments: string[] = [];

  // 初期化
  constructor(
    private hatena: HatenaService,
    private spring: SpringService,
    private hero: HeroService
  ) { }

  public onclick() {
    this.hatena.requestGet(this.url).subscribe
    (
      // データ取得が正しく終わった場合
      data => {
        let result: string[] = [];
        data.bookmarks.forEach(function(value: any) {
            if (value.comment !== '') {
              result.push(value.comment);
            }
          });
          this.comments = result;
          this.count = data.count;
      },
      error => {
        this.count = 0;
        this.comments = [];
        console.log('アクセスできません。') ;
      }
    );
  }

  public onchenge() {
    this.hero.getHeroes()
    .then(
      response => {
        console.log(response["0"].name);
        alert("ok");
      })
    .catch(
      error => {
        alert(error);
      }
    );
  }
}