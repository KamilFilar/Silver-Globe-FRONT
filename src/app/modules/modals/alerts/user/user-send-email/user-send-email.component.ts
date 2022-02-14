import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-send-email',
  templateUrl: './user-send-email.component.html',
  styleUrls: ['./../../../../../../assets/styling/global/alert.scss'],
})

export class UserSendEmailComponent implements OnChanges, OnInit {
  
  @Input() userEmail = '';
  @Input() userContent = '';
  @Input() sendDate = new Date();
  faTimes = faTimes;
  localSendDate = this.sendDate.toLocaleDateString() + ' ' + this.sendDate.toLocaleTimeString();
  isValidEmail!: boolean;

  showError = false;

  constructor() {}

  checkIsEmailSend() {
    // This func checks if the email has been sent correctly from contanct form
    if (this.userEmail === '' || this.userContent === '') {
      this.showError = true;
    } else {
      this.showError = false;
    }
  }

  validateEmial() {
    let regex = /\S+@\S+\.\S+/;
    this.isValidEmail = regex.test(this.userEmail);
    return;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.validateEmial();
      this.checkIsEmailSend();
    }
  }

  ngOnInit(): void {
    this.validateEmial();
    this.checkIsEmailSend();
  }
  
}
