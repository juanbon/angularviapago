import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AbstractService } from 'src/app/services/abstract-requests.service';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
// import { SnackBarService } from '../../presentation/services/snack-bar.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SnackBarService } from '../presentation/services/snack-bar.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css'],
})
export class MiCuentaComponent implements OnInit {
  public userId: any;
  public isLoggedIn = false;
  public url: string = '';
  public datoUsuario: any;
  public sinFoto: any = null;
  @ViewChild('fileInput') fileInput: ElementRef | any;
  public namePage: string = '';
  public showPassword: boolean = false;
  myInput: FormControl;
  public nombreValue: any;
  @ViewChild('nombreInput') nombreInput: any;
  userData: any = {};
  @ViewChild('passInput') passInput: any;

  public restoreForm: FormGroup;
  restoreFailed = false;

  validationMessages = {
    password: {
      required: 'La nueva contraseña es requerida.',
      pattern: 'La clave debe tener al menos 6 caracteres, contener letras y números.',
    },
    verifyPassword: {
      required: 'Debe repetir la nueva contraseña.',
      pattern: 'La clave debe tener al menos 6 caracteres, contener letras y números.',
    },
  };


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tokenSV: TokenStorageService,
    private location: Location,
    private translate: TranslateService,
    private abstractSv: AbstractService,
    private snackbarSv: SnackBarService,
    private authService: AuthService
  ) {
    this.myInput = new FormControl('', [
      Validators.required,
      Validators.pattern(
        '(?=^.{6,}$)(?=.*\\d)(?=.*[!?@#$%^&*()_,./+-~=<>{}[]|\\\\]+)?(?![.\\n])?(?=.*[A-Za-z]).*'
      ),
    ]);
    this.restoreForm = new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d).{6,}$/) // Expresión regular para validar clave
      ]),
      verifyPassword: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d).{6,}$/) // Expresión regular para validar clave
      ]),
    });
  }

  async ngOnInit() {
    this.isLoggedIn = !!this.tokenSV.getToken();
    this.userId = this.tokenSV.getUser().id;
    this.url = `users/${this.userId}`;
    await this.getUser();
    this.routeUrl();
  }

  async getUser() {
    return new Promise<void>((resolve) => {
      this.abstractSv.get(this.url).subscribe((res) => {
        this.datoUsuario = res;
        resolve();
      });
    });
  }

  routeUrl() {
    if (this.router.url == 'b/mi-cuenta') {
      this.namePage = 'mi-cuenta';
    }
    if (this.router.url.includes('cerrar-sesion')) {
      this.namePage = 'cerrar-sesion';
    }
    if (this.router.url.includes('nombre')) {
      this.namePage = 'nombre';
      this.userData.name = this.datoUsuario?.name ? this.datoUsuario.name : '';
    }
    if (this.router.url.includes('email')) {
      this.namePage = 'email';
      this.userData.email = this.datoUsuario?.email
        ? this.datoUsuario.email
        : '';
    }
    if (this.router.url.includes('telefono')) {
      this.namePage = 'telefono';
      this.userData.phone = this.datoUsuario?.phone
        ? this.datoUsuario.phone
        : '';
    }
    if (this.router.url.includes('username')) {
      this.namePage = 'username';
      this.userData.username = this.datoUsuario?.username
        ? this.datoUsuario.username
        : '';
      console.log(this.userData, this.datoUsuario);
    }
    if (this.router.url.includes('clave')) {
      this.namePage = 'clave';
    }

    console.log(this.namePage);
    // this.updateData()
  }
  goBack(): void {
    this.location.back();
  }

  volver() {
    this.router.navigate(['/mi-cuenta']);
  }

  imgPerfil(avatar: any) {
    if (!avatar) {
      this.sinFoto = true;
      return '../../../../assets/img/item-avatar.png';
    } else {
      this.sinFoto = false;
      return avatar;
    }
  }

  gotoPage(page?: any) {
    console.log(page);
    this.router.navigate(['mi-cuenta-edit', page]);
  }

  selectProfilePicture(): void {
    console.log('ssss');
    if (!this.sinFoto) {
      this.upDateImage(null);
    } else {
      this.fileInput.nativeElement.click();
    }
  }

  onFileSelected(event: any): void {
    let file: File = event.target.files[0];
    console.log(file);
    //  console.log(file)
    this.upDateImage(file);
    event = '';
  }

  upDateImage(img: any) {
    let url = `${this.url}/image`;
    let header = { 'x-content-type': 'on' };
    let body = new FormData();
    body.append('file', img);
    console.log(body);
    this.abstractSv.put(url, body, header).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
      complete: () => this.getUser(),
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // modificarDato(){
  //   if (this.myInput.invalid) return;
  //   console.log(this.myInput)
  // }

  submitForm() {
    console.log('Datos del formulario:', this.userData);
    this.cambiarData(this.userData);
  }

  async cambiarData(data?: any) {
    console.log(data);
    let url = `users/user/profile/`;
    let tok = await this.tokenSV.getToken();
    console.log(tok);
    let header = {
      'content-type': 'application/json; charset=UTF-8',
      'x-access-token': tok,
    };
    let body = data;
    console.log(body, url);
    this.abstractSv.put(url, body, header).subscribe({
      next: (res) => {
        console.log(res);
        this.snackbarSv.showSuccess('La operación se realizó correctamente');
        this.volver();
      },
      error: (err) => {
        console.log(err);
        this.snackbarSv.showError('Ha ocurrido un error');
      },
    });
  }
  onSubmitRestore(): void {
    if (
      this.restoreForm.get('password')?.value ==
      this.restoreForm.get('verifyPassword')?.value
    ) {
      this.cambiarData(this.restoreForm.value)
    } else {
      this.restoreFailed = true;
      this.snackbarSv.showError('Las contraseñas no coinciden')};
  }


  logout(): void {
    this.authService.logout().subscribe();
    this.tokenSV.signOut();
    this.isLoggedIn = false;//!!this.tokenSV.getToken();

    this.router.navigate(['/login']);
  }
}
