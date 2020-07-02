import { Injectable } from '@angular/core';
import { Raterpas } from '../shared/raterpas';
import { ARTICLESRATERPAS } from '../shared/articlesRaterPas';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

//provide the data from the server 
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { baseURL } from '../shared/baseURL';

@Injectable({
  providedIn: 'root'
})
export class RaterpasService {

  constructor(private http: HttpClient) { }

  getArticlesRaterPas():  Observable<Raterpas[]> {
    return of (ARTICLESRATERPAS).pipe(delay(2000));
  }

  getSelectedArticlesRaterPas(ref : string): Observable<Raterpas>{
    return of (ARTICLESRATERPAS.filter((article) => (article.ref === ref))[0]);
  }

  // **** Using HTTP REQUEST ****
  // getArticlesRaterPas():  Observable<Raterpas[]> {
  //   return this.http.get<Raterpas[]>(baseURL);
  // }

  // getSelectedArticlesRaterPas(ref : string): Observable<Raterpas>{
  //   return this.http.get<Raterpas>(baseURL+ref);
  // }
}
