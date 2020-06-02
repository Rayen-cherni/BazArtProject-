import { Injectable } from '@angular/core';
import { Raterpas } from '../shared/raterpas';
import { MEILLEURES } from '../shared/meilleuresVente';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MeilleuresVentesService {

  constructor() { }

  getMeilleures():  Observable<Raterpas[]> {
    return of (MEILLEURES).pipe(delay(2000));
  }
}
