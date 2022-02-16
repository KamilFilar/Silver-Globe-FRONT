import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NewsletterService {

  basicURL = 'http://localhost:8015/api/newsletter/';

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  addNewEmail(email: String) {
    const body = JSON.stringify({
      email: email
    })

    return this.http.post(this.basicURL, body, { headers: this.headers }).toPromise();
  }
}
