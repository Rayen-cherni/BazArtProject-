import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Raterpas } from "../shared/raterpas";
import { delay } from "rxjs/operators";
import { CHAUSSURES } from '../shared/chaussures';

@Injectable({
  providedIn: 'root'
})
export class ChaussuresService {

  constructor() { }
  getChaussures(): Observable<Raterpas[]> {
    return of(CHAUSSURES).pipe(delay(2000));
  }
}
