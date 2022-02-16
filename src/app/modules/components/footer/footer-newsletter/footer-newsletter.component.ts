import { Component, OnInit } from '@angular/core';
import { NewsletterService } from 'src/app/config/services/newsletter.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer-newsletter',
  templateUrl: './footer-newsletter.component.html',
  styleUrls: ['./footer-newsletter.component.scss'],
})

export class FooterNewsletterComponent implements OnInit {
  newsletter = 'Newsletter';
  faTrashAlt = faTrashAlt;
  msgState!: number;
  msgIconPath!: string;
  form!: FormGroup;
  submitted = false;
  emailToAdd!: String;
  emailObj: any;

  constructor(
    private newsletterService: NewsletterService,
    private formBuilder: FormBuilder
  ) {}

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      this.msgState = 0;
      this.msgIconPath = './../../../../../assets/images/materials/emoji/face-concerned.png';
      return;
    }

    this.emailToAdd = this.form.value.email;

    this.newsletterService.addNewEmail(this.emailToAdd).then(
      (res) => {
        this.emailObj = res;
        this.msgState = 2;
        this.msgIconPath = './../../../../../assets/images/materials/emoji/happy.png';
        return;
      })
      .catch(
        (err) => {
          this.emailObj = err;
          this.msgState = 1;
          this.msgIconPath = './../../../../../assets/images/materials/emoji/face-concerned.png';
          return;
        }
      )
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
    });
  }
}
