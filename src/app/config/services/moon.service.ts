import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class MoonService {

  basicURL = 'http://localhost:8080/api/moon/';

  constructor(private http: HttpClient) { }

  calcWeight(weight: number) {
    const URL = this.basicURL + 'weight?userWeight=' + weight;
    return this.http.get(URL).toPromise();
  }

  // JD = Julian Date
  getCurrentJD() {
    const URL = this.basicURL + 'julian-date';
    return this.http.get(URL).toPromise();
  }

  calcJD(date: string) {
    const URL = this.basicURL + 'julian-date/' + date;
    return this.http.get(URL).toPromise();
  }

  getCurrentPhase() {
    const URL = this.basicURL + 'phase';
    return this.http.get(URL).toPromise();
  }

  calcPhase(date: string) {
    const URL = this.basicURL + 'phase/' + date;
    return this.http.get(URL).toPromise();
  }


}
