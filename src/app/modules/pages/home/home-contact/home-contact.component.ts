import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/config/services/email.service';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-contact',
  templateUrl: './home-contact.component.html',
  styleUrls: [
    './home-contact.component.scss',
    './../../../../../assets/styling/global/fontSize.scss',
  ],
})

export class HomeContactComponent implements OnInit {
  faInfoCircle = faInfoCircle;
  form!: FormGroup;
  msgState!: number; // 1 = required, 2 = invalid, 3 = success
  msgIconPath!: string;
  emailObj: any;
  showError = {
    email: false,
    content: false,
  };
  user = {
    email: '',
    content: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private emailService: EmailService
    ) {}

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  sendUserEmail() {
    let email = (<HTMLInputElement>document.getElementById('userEmail')).value;
    let subject = (<HTMLInputElement>document.getElementById('userSubject')).value;
    let content = (<HTMLInputElement>document.getElementById('userContent')).value;

    this.user.email = email;
    this.user.content = content;

    if (this.showError.email === true && email) {
      this.showError.email = false;
    }

    if (this.showError.content === true && content) {
      this.showError.content = false;
    }

    if (!email && !content) {
      this.msgState = 1;
      this.msgIconPath = './../../../../../assets/images/materials/emoji/face-concerned.png';
      this.showError.email = true;
      this.showError.content = true;
      return;
    }

    if (!email) {
      this.msgState = 1;
      this.msgIconPath = './../../../../../assets/images/materials/emoji/face-concerned.png';
      this.showError.email = true;
      return;
    }

    if (!content) {
      this.msgState = 1;
      this.msgIconPath = './../../../../../assets/images/materials/emoji/face-concerned.png';
      this.showError.content = true;
      return;
    }

    if (this.form.invalid) {
      this.msgState = 2;
      this.msgIconPath = './../../../../../assets/images/materials/emoji/face-concerned.png';
      this.showError.email = true;
      return;
    }

    if (email && content) {
      if (!subject) {
        subject = 'MoonPhase user: ' + email;
      }
      this.msgState = 3;
      this.msgIconPath = './../../../../../assets/images/materials/emoji/happy.png';
      this.emailService.sendEmail(content, subject, email).then(
        (res) => {
          this.emailObj = res;
          console.log(this.emailObj)
        }
      )
      .catch(
        (err) => {
          this.emailObj = err;
          console.log(this.emailObj);
          
        }
      );
    }
  }

  fontSizeFunc() {
    let fontSize = localStorage.getItem('fontSize')!;
    return fontSize;
  }

  ngOnInit(): void {
    this.fontSizeFunc();
    this.form = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      textarea: ['', [Validators.required]],
    });
  }
}