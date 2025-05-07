import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SnackBarService } from 'src/app/modules/group_beta/presentation/services/snack-bar.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent {

  public emailForm: FormGroup;
  emailSend = false;
  errorMessage = '';

  private snackBarService: SnackBarService;

  constructor(private router: Router, private authService: AuthService,
    snackBarService: SnackBarService) { 
      this.snackBarService = snackBarService;
    this.emailForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.email
      ])
    });
  }

  onSubmitEmail() {
    if (this.emailForm.valid) {
      this.authService.restore(this.emailForm.value.email).subscribe(
        data => {
          this.snackBarService.showSuccess(data.message);
          this.emailSend = true;
        },
        error => {
          this.snackBarService.showError(error.error.message);
        }
      );
    }
  }

}
