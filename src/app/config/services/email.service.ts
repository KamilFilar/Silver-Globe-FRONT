
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EmailService {

  basicURL = 'http://localhost:8080/api/nodeMailer/';

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(private http: HttpClient) { }

  sendEmail(content: String, subject: String, target: String) {
    const body = JSON.stringify({
      content: content,
      subject: subject,
      target: target,
    })

    return this.http.post(this.basicURL + 'email', body, { headers: this.headers }).toPromise();
  }
}
