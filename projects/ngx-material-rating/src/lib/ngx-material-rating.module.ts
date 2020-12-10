import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgxRangeModule } from 'ngx-range';
import { NgxMaterialRatingComponent } from './ngx-material-rating.component';

@NgModule({
  declarations: [NgxMaterialRatingComponent],
  imports: [MatButtonModule, MatIconModule, NgxRangeModule],
  exports: [NgxMaterialRatingComponent],
})
export class NgxMaterialRatingModule {}
