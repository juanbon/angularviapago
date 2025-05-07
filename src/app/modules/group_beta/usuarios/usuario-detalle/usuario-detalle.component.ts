import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AbstractService } from 'src/app/services/abstract-requests.service';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.component.html',
  styleUrls: ['./usuario-detalle.component.css']
})
export class UsuarioDetalleComponent implements OnInit {
  public userId: any;
  public url: string = '';
  public userData$: Observable<any> | undefined;
  @ViewChild('fileInput') fileInput: ElementRef | any;
 public sinFoto: any = null;
  // public icono: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private translate: TranslateService,
    private abstractSv: AbstractService) { }

  async ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.translate.setDefaultLang('es');
    this.getUserData();

  }

  getUserData(){
    this.url = `users/${this.userId}`;
    this.userData$ =  this.abstractSv.get(this.url)
  //   .subscribe((res: any) => {
  //     console.log(res)
  //   this.userData$ = res;
     
  //  })
  // this.abstractSv.get(this.url)
  //   .subscribe((res: any) => {
  //     console.log(res)
     
  //  })
  }

  goBack(): void {
    this.location.back();
  }

  gotoPage() {

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
   console.log(file)
  //  console.log(file)
     this.upDateImage(file)
     event = '';
  }

  upDateImage(img: any) {
    let url = `${this.url}/image`;
    let header = { 'x-content-type': 'on' };
    let body = new FormData();
      body.append('file', img);
      console.log(body)
    this.abstractSv.put(url, body, header).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
      complete: () => this.getUserData()
    })
  }

  goToUserDetail() {  
    this.router.navigate(['usuario-update', this.userId]);
  }


}


