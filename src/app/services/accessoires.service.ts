import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Raterpas } from "../shared/raterpas";
import { delay } from "rxjs/operators";
import { ACCESSSOIRES } from "../shared/accessoires";

@Injectable({
  providedIn: "root",
})
export class AccessoiresService {
  constructor() {}

  getAccessoires(): Observable<Raterpas[]> {
    return of(ACCESSSOIRES).pipe(delay(2000));
  }
}
