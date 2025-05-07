import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { AbstractService } from 'src/app/services/abstract-requests.service';
import { Location } from '@angular/common';
import { SnackBarService } from '../../presentation/services/snack-bar.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css'],
})
export class CuentaComponent implements OnInit {
  public userId: any;
  public url: string = '';
  public userData$: Observable<any> | undefined;
  public modal: boolean = false;
  public inputValue: string = '';

  constructor(
    private route: ActivatedRoute,
    private translate: TranslateService,
    private abstractSv: AbstractService,
    private location: Location,
    private snackbarSv: SnackBarService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.translate.setDefaultLang('es');
    this.getUserData();
    // const datos = {
    //   text: '',
    //   filter: this.opciones,
    //   order: this.orderName
    // };
    // this.getData(datos);
  }
  getUserData() {
    this.url = `usersAccounts/${this.userId}`;
    this.userData$ = this.abstractSv.get(this.url);
    //   .subscribe((res: any) => {
    //     console.log(res)
    //   this.userData$ = res;

    //  })
    // this.abstractSv.get(this.url).subscribe((res: any) => {
    //   console.log(res);
    // });
  }

  gotoPage(page: any, tipo: any) {

    this.router.navigate([tipo, page]);
  }

  imgAvatar(avatar: any) {
    if (!avatar) {
      return '../../../../assets/img/item-avatar.png';
    } else {
      return avatar;
    }
  }

  goBack(): void {
    this.location.back();
  }

  movimientos(name: any, cvu: any, alias: any, balance: any) {
    console.log(name, cvu, alias, balance);
    let dataToObject: any = {
      name: name,
      cvu: cvu,
      alias: alias,
      balance: balance,
    };
    console.log(dataToObject);

    this.router.navigate([
      'transaccion-lista',
      this.userId,
      { params: JSON.stringify(dataToObject) },
    ]);
  }

  cambiarAlias(data: any) {
    console.log(data);
    let url = `users/user/setUserAccountAlias/${this.userId}`;
    let header = { 'x-content-type': 'on' };
    let body = { alias: data };
    console.log(body, url);
    // https://sandbox.viapago.com.ar/api/users/enableIdentity/ee2940a2-f759-4ebf-a5f8-67ee61090351
    this.abstractSv.post(url, body, header).subscribe({
      next: (res) => {
        this.snackbarSv.showSuccess('La operación se realizó correctamente');
        this.getUserData();
      },
      error: (err) => {
        console.log(err)
        this.snackbarSv.showError('Ha ocurrido un error');
      },
    });
    // this.abstractSv.get(this.url)
    // https://sandbox.viapago.com.ar/api/users/user/setUserAccountAlias/4683331e-5653-48c3-8cb8-3f1a49994db5
  }
}
