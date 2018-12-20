import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { IJokeResponse } from "./interfaces";

@Injectable({
  providedIn: "root"
})
export class JokesService {
  constructor(public http: HttpClient) {}

  getJokes(num: number): Observable<IJokeResponse> {
    return this.http.get<IJokeResponse>(
      "http://api.icndb.com/jokes/random/" + num
    );
  }
}
