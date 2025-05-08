/* @angular */
import { NgSelectModule } from '@ng-select/ng-select';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader,TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
/* app */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* helpers */
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { LoadingInterceptor } from './helpers/loading.interceptor';
/* services */
import { LoadingService } from './services/loading.service';
/* modules */
import { AuthorizationModule } from './modules/group_beta/security/authorization/authorization.module';
import { ListaPageModule } from './modules/group_beta/shared/lista-page/lista-page.module';
/* components */
import { SideMenuComponent } from './modules/group_beta/shared/side-menu/side-menu.component';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; // use import {NgIdleModule} from '@ng-idle/core'; if not using keepalive
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GraficaTransaccionesComponent } from './components/grafica-transacciones/grafica-transacciones.component';
import { MatPaginatorModule } from '@angular/material/paginator';



// Función para cargar los archivos de traducción
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

registerLocaleData(localeEs);




@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    GraficaTransaccionesComponent
    ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    FormsModule,
    AuthorizationModule,
    ListaPageModule,
    NgIdleKeepaliveModule.forRoot(), // use NgIdleModule.forRoot() if not using keepalive
    NgSelectModule
  ],
  exports: [
    TranslateModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' },
    authInterceptorProviders,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    multi: true,
  },
  LoadingService,
  TranslateService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
