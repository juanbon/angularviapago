import { Component, Inject, ChangeDetectorRef, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { LoadingService } from './services/loading.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DOCUMENT } from '@angular/common';
import packageJson from 'package.json';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isLoggedIn = false;
  public username?: any;
  public isOpen: boolean = false;
  public mostrarMenu: boolean = false;
  public menu: boolean = false;
  public privilege: any = null;
  public version: string = "v" + packageJson.version;
  idleState = "NOT_STARTED";
  countdown?: number | null = null;
  lastPing?: Date | null = null;

  constructor(
    private router: Router,
    private tokenStorageService: TokenStorageService,
    public loadingService: LoadingService,
    private authService: AuthService,
    private breakpointObserver: BreakpointObserver,
    @Inject(DOCUMENT) private document: Document,
    private idle: Idle, 
    private cd: ChangeDetectorRef
    ) {
    this.username = this.tokenStorageService.getUser();
    let user: any = localStorage.getItem('auth-user');
    if (user) this.privilege = JSON.parse(user)['access'];
    console.log(this.privilege)

    // set idle parameters
    idle.setIdle(environment.timeout * 30); // how long can they be inactive before considered idle, in seconds
    idle.setTimeout(environment.timeout * 30); // how long can they be idle before considered timed out, in seconds
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES); // provide sources that will "interrupt" aka provide events indicating the user is active

    // log when the user becomes idle
    idle.onIdleStart.subscribe(() => {
      console.log("Idle start...")
      this.idleState = "IDLE";
    });
    // reset idle monitoring when activity is detected
    idle.onIdleEnd.subscribe(() => {
      this.idleState = "NOT_IDLE";
      console.log("Idle reseted...")
      this.countdown = null;
      this.cd.detectChanges(); 
    });
    // redirect to login when the user has timed out
    idle.onTimeout.subscribe(() => {
      this.idleState = "TIMED_OUT"
      console.log("Timeout....")
      this.router.navigateByUrl(`/login`);
    });
  }

  ngOnInit(): void {
    //reset idle watch

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    // 👇 Aquí puedes agregar la clase al body
    if (this.isLoggedIn) {
      this.document.body.classList.add('logged-in');
      this.document.body.classList.remove('logged-out');
    } else {
      this.document.body.classList.add('logged-out');
      this.document.body.classList.remove('logged-in');
    }



    
    this.reset();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
    this.document.body.addEventListener('click', this.closeSideMenuOnClickOutside.bind(this));
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.breakpointObserver.observe(Breakpoints.Handset).subscribe(result => {
      console.log(result.matches)
      this.isOpen = result.matches; // Establecer isOpen en true si no es un dispositivo móvil
    });
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.mostrarMenu = !event.url.includes('/login');
      }
    });

    if (!this.isLoggedIn) {
      this.router.navigate(['/login']);
    }
  }


  ngOnDestroy() {
    this.document.body.removeEventListener('click', this.closeSideMenuOnClickOutside.bind(this));
  }

  HasPermiso(permiso : number): boolean {

    return this.tokenStorageService.validatePe(permiso);

  }

  logout(): void {
    this.authService.logout().subscribe();
    this.tokenStorageService.signOut();
    this.isLoggedIn = false;//!!this.tokenStorageService.getToken();

    this.router.navigate(['/login']);
  }

  isLoged() {
    return !!this.tokenStorageService.getToken();
  }

  hasRoute(route: string) {
    if (this.router.url === route) {
      return true;
    }

    return false;
  }

  toggleSideMenu(e?: any) {
    console.log(this.menu, e, 'aaaaaaaa')
    if (e) {
      this.isOpen = false;
    return
  };
   if (!this.menu) this.menu = true;
  }


  closeSideMenuOnClickOutside(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    const sideMenuElement = this.document.getElementById('sideMenu');
    if(this.menu) {
      console.log(this.menu)
      this.isOpen = true;
      this.menu = false;
      return
    }
    // Verificar si el clic ocurrió fuera del área del menú
    if (sideMenuElement && !sideMenuElement.contains(targetElement)) {
      // Cerrar el menú lateral aquí (puedes usar una variable isOpen para controlar si está abierto o cerrado)
      this.isOpen = false;
      this.menu = false;
    }
  }
  reset() {
    // we'll call this method when we want to start/reset the idle process
    // reset any component state and be sure to call idle.watch()
    this.idle.watch();
    this.idleState = "NOT_IDLE";
    this.countdown = null;
    this.lastPing = null;
  }



}
