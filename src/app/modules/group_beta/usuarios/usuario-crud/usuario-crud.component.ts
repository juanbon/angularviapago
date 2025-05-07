import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractService } from 'src/app/services/abstract-requests.service';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { SnackBarService } from '../../presentation/services/snack-bar.service';

@Component({
  selector: 'app-usuario-crud',
  templateUrl: './usuario-crud.component.html',
  styleUrls: ['./usuario-crud.component.css']
})
export class UsuarioCrudComponent implements OnInit {
  public userId: any;
  public url: string = '';
  public userData: any;
  @ViewChild('fileInput') fileInput: ElementRef | any;
  public sinFoto: any = null;
  public isCreate: boolean = true;
  public myForm: any;
  public estados: string[] = ['enable', 'pending', 'disable'];
  public accesos: string[] = ['administrator', 'supervisor', 'operator', 'customer', 'user'];
  public showPassword: boolean = false;
  public urlId: string = '';

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private tokenSV: TokenStorageService,
    private translate: TranslateService,
    private snackbarSv: SnackBarService,
    private abstractSv: AbstractService) { 
     }

  async ngOnInit() {
    this.isCreate = this.router.url == 'b/usuario-create' ? true : false; 
    this.myForm = new FormGroup({
      access: new FormControl('customer', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
      id: new FormControl(null, [Validators.pattern(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)]),
      link1: new FormControl(null, [Validators.pattern(/^(https?:\/\/)?[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)]),
      link2: new FormControl(null, [Validators.pattern(/^[A-Za-z0-9_.]{1,30}\/?$/)]),
      link3: new FormControl(null, [Validators.pattern(/^[A-Za-z0-9_.]{1,}\/?$/)]),
      link4: new FormControl(null, [Validators.pattern(/^[A-Za-z0-9_]{5,15}(\?lang=[a-z]{2})?/)]),
      name: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z0-9]{1,}.+/)]),
      notes: new FormControl('', Validators.pattern(/^[A-Za-z0-9]{0,}.+/)),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(/(?=^.{6,}$)(?=.*\d)(?=.*[\!\?\@\#\$\%\^\&\*\(\)\_\,\.\/\+\-\~\=\<\>\{\}\[\]\|\\]+)?(?![.\n])?(?=.*[A-Za-z]).*$/)]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)]),
      status: new FormControl('enable', Validators.required),
      username: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z0-9]{1,}[\-\_\.]?[A-Za-z0-9]{4,}$/)])
    });
    if (!this.isCreate) {
      this.userId = this.route.snapshot.paramMap.get('id');
      this.urlId = `users/${this.userId}`;
     this.abstractSv.get(this.urlId).subscribe((res)=> {
      this.userData = res;
      const userDataAdapt = {
        name: this.userData.name,
        email: this.userData.email,
        id: this.userData.id,
        access: this.userData.access,
        notes: this.userData.notes,
        password: '',
        phone: this.userData.phone,
        status:this.userData.status,
        username: this.userData.username
      }
    console.log(userDataAdapt)
    this.myForm.patchValue(userDataAdapt);
    })
    };
    this.translate.setDefaultLang('es');
  }

  async postUserData(){
    if (this.myForm.valid) {
   let tok =  await this.tokenSV.getToken()
  //  console.log(tok)userToken['accessToken'];
   console.log(tok)
    const body = this.myForm.value;
  this.url = `users/`;
  let hea = { 
    'content-type': "application/json; charset=UTF-8",
    'x-access-token':  tok
  }
  console.log(body, hea)
  // headers['x-access-token']
  if (this.isCreate) {
   this.abstractSv.post(this.url, body, hea).subscribe({
    next: (res)=>{
      this.userData =  res;
      this.snackbarSv.showSuccess('La operación se realizó correctamente');
      this.goBack();
    },
    error: (err)=> {
      console.error(err);
      this.snackbarSv.showError(err);
    }
   })
    } else {
    this.abstractSv.put(this.urlId, body, hea).subscribe({
      next: (res)=> {
        console.log(res, this.urlId)
        this.snackbarSv.showSuccess('La operación se realizó correctamente');
      this.goBack();
    },
    error: (err)=> {
      console.error(err);
      this.snackbarSv.showError(err);
      this.goBack();
    }
    })
  }
  }
}

  goBack(): void {
    this.location.back();
  }

  imgPerfil(avatar: any) {
    if (!avatar) {
      this.sinFoto = true;
      return  '../../../../assets/img/item-avatar.png'
   } else {
    this.sinFoto = false;
    return avatar;
    };
   }  

   togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

}
