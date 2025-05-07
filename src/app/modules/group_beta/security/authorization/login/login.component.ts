import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { SnackBarService } from 'src/app/modules/group_beta/presentation/services/snack-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private snackbarSv: SnackBarService,

  ) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.router.navigate(['/']);
    }
  }

  onSubmit(): void {
    this.authService.signin(this.loginForm.get('username')!.value,
        this.loginForm.get('password')!.value).subscribe({
      next: (data) => {
        console.log('data',data);
        this.tokenStorage.saveToken(data.accessToken);
        const tokenBusPlus: any = (data.busplusToken === undefined ? this.tokenStorage.getTokenBusPlus() : data.busplusToken);
        this.tokenStorage.validateToken(data.accessToken).then(async (data) => {
          await this.tokenStorage.saveLastActivity(Date.parse(new Date().toISOString()))
          await this.tokenStorage.saveTokenBusPlus(tokenBusPlus);
          await this.tokenStorage.saveUser(data);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.reloadPage();
        })
        .catch((error) => {
          console.error(error)
          this.snackbarSv.showError('Se produjo un error');
        });

      },
     error: (err) => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.snackbarSv.showError('Se produjo un error');
        this.isLoginFailed = true;
      }

  });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
