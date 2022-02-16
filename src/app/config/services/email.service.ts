
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EmailService {

  basicURL = 'http://localhost:8015/api/nodeMailer/';

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(private http: HttpClient) { }

  sendEmail(content: String, subject: String, sender: String) {
    const body = JSON.stringify({
      msg: content,
      subject: subject,
      email: sender,
    })
    
    return this.http.post(this.basicURL + 'email', body, { headers: this.headers }).toPromise();
  }
}
