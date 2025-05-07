import { NgModule } from '@angular/core';
import { CustomFormatPipe } from './custom-format.pipe';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    CustomFormatPipe,
  
  ],
  imports: [
    TranslateModule.forRoot(),
  ],
  exports: [
    CustomFormatPipe,
  
  ],
})
export class PipesModule {}
