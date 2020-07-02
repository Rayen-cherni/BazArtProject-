import { Injectable } from '@angular/core';
import { Raterpas } from '../shared/raterpas';
import { ARTICLESRATERPAS } from '../shared/articlesRaterPas';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RaterpasService {

  constructor() { }

  getArticlesRaterPas():  Observable<Raterpas[]> {
    return of (ARTICLESRATERPAS).pipe(delay(2000));
  }

  getSelectedArticlesRaterPas(ref : string): Observable<Raterpas>{
    return of (ARTICLESRATERPAS.filter((article) => (article.ref === ref))[0]);
  }
}
