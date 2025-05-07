import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AbstractService } from 'src/app/services/abstract-requests.service';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { SnackBarService } from '../../presentation/services/snack-bar.service';

@Component({
  selector: 'app-identidad-detalle',
  templateUrl: './identidad-detalle.component.html',
  styleUrls: ['./identidad-detalle.component.css'],
})
export class IdentidadDetalleComponent implements OnInit {
  public userId: any;
  public url: string = '';
  public urlImages: string = ''
  public userData$: Observable<any> | undefined;
  public imagesData$: Observable<any> | undefined;
  public sinFoto: any = null;
  @ViewChild('fileInput') fileInput: ElementRef | any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private translate: TranslateService,
    private abstractSv: AbstractService,
    private snackbarSv: SnackBarService,
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.translate.setDefaultLang('es');
    this.getIdentityData();
    this.getImagesData();
  }

  getIdentityData() {
    this.url = `usersIdentities/${this.userId}`;
    this.userData$ = this.abstractSv.get(this.url);
    this.userData$.subscribe(res=> console.log(res));
  }

  getImagesData(){
    this.urlImages = `usersIdentitiesImages/${this.userId}`
    this.imagesData$ = this.abstractSv.get(this.urlImages).pipe(
      map((res) => {
        const response = {
          verifyDniFront: {},
          verifyDniBack: {},
          verifySelfie1: {}
        };

        res.forEach((obj: { idTypeImages?: any; image: string }) => {
          const Base64 = 'data:image/png;base64,'
          if (obj.idTypeImages === 2) {
            response.verifyDniFront = Base64 + obj.image;
          } else if (obj.idTypeImages === 3) {
            response.verifyDniBack = Base64 + obj.image;
          } else if (obj.idTypeImages === 1) {
            response.verifySelfie1 = Base64 + obj.image;
          }
        });

        return response;
      })
    );
  }

  goBack(): void {
    this.location.back();
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


  imgAvatar(avatar: any) {
    if (!avatar) {
      return '../../../../assets/img/item-avatar.png';
    } else {
      return avatar;
    }
  }

  selectProfilePicture(): void {
    console.log(this.sinFoto);
    if (!this.sinFoto) {
      this.upDateImage(null);
    } else {
      this.fileInput.nativeElement.click();
    }
  }

  onFileSelected(event: any): void {
    let file: File = event.target.files[0];
    console.log(file);
    this.upDateImage(file);
    event = '';
  }

  upDateImage(img: any) {
    let url = `${this.url}/approvalFile`;
    let header = { 'x-content-type': 'on' };
    let body = new FormData();
    body.append('file', img);
    console.log(body);
    this.abstractSv.put(url, body, header).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
       complete: () => this.getIdentityData(),
    });
  }

  getFechaSinHora(fecha: string)
  {
    if (fecha.length > 10){
      return fecha.substring(0,10)
    }
    return fecha;
  }

  crearPermisos(name: string, id: string) {
    this.router.navigate(['permisos-create', {name:name, id:id}]);
  }

  editarPermisos(idenId: string, name: string, id: string) {
    this.router.navigate(['permisos-ver', {idenId:idenId, name:name, id:id}]);
  }

  gotoEdit(page?: any) {
    console.log(page);
    this.router.navigate(['identidad-update', page]);
  }

  gotoPage(page?: any) {
    this.router.navigate(['usuario-detalle', page]);
  }

  action(id: any, data: any) {
    console.log(data);
    let url = `users/${data}/${id}`;
    let header = { 'x-content-type': 'on' };
    let body = id;
    console.log(body, url);
    // https://sandbox.viapago.com.ar/api/users/enableIdentity/ee2940a2-f759-4ebf-a5f8-67ee61090351
    this.abstractSv.post(url, body, header).subscribe({
      next: (res) => {
        this.snackbarSv.showSuccess('La operación se realizó correctamente');
        console.log(res)
      },
      error: (err) => {
        this.snackbarSv.showError('Ha ocurrido un error');
        console.log(err)
      },
      complete: () => this.goBack(),
    });
  }

  navigateToDetail(item: any, type: string) {
    console.log(item);
    let route: string;

    switch (type) {
      case 'identidad':
        route = 'identidad-detalle';
        break;
      case 'cuenta':
        route = 'cuenta-detalle';
        break;
      case 'cards':
        route = 'tarjeta-detalle';
        break;
      default:
        return;
    }

    this.router.navigate([route, item.id]);
  }
}
