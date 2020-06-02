import { Injectable } from '@angular/core';
import { Article } from '../shared/article';
import { Middle } from '../shared/middle';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getMiddle():  Observable<Article[]> {
    return of (Middle).pipe(delay(2000));
  }
}
