import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { SnackBarService } from 'src/app/modules/group_beta/presentation/services/snack-bar.service';

@Component({
  selector: 'app-restore-password',
  templateUrl: './restore-password.component.html',
  styleUrls: ['./restore-password.component.css']
})
export class RestorePasswordComponent implements OnInit{

  public restoreForm: FormGroup;
  restoreFailed = false;
  errorMessage = '';
  email = '';
  hash = '';

  private snackBarService: SnackBarService;

  constructor(private router: Router, private authService: AuthService,
    snackBarService: SnackBarService, private route: ActivatedRoute) { 
      this.snackBarService = snackBarService;
    this.restoreForm = new FormGroup({
      passoriginal: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      passduplicated: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
			(params) => {
        this.email = params.get('email') || '';
        this.hash = params.get('hash') || '';
      });
  }

  onSubmitRestore(): void {
    if (this.restoreForm.get('passoriginal')?.value == this.restoreForm.get('passduplicated')?.value) {
      this.authService.updatePassword(this.email, this.restoreForm.get('passoriginal')?.value, this.hash).subscribe(
        data => {
          this.snackBarService.showSuccess("Contraseña modificada correctamente");
          this.router.navigateByUrl(`/login`);
        },
        error => {
          this.snackBarService.showError(error.error.message);
        })
    } else
      this.snackBarService.showError("Las contraseñas no coinciden");
  }

}
