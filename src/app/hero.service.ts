import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Hero } from './hero';
@Injectable()
export class HeroService {
  
  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'http://localhost:8080/';  // <=ここを追加
  constructor(private http: Http) { }

  /**
   * 戻り値はPromise型<キャスト型>
   * .toPromise()
   * .then(response=> return response.json() as キャスト型)
   * .catch(error=> error.status);
   */
  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => { return response.json() as Hero[] })
      .catch(error=> { return error.status });
  }
  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Hero)
      .catch(error => error.status);
  }
}