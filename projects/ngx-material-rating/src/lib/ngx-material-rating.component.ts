import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'ngx-material-rating',
  templateUrl: './ngx-material-rating.component.html',
})
export class NgxMaterialRatingComponent {
  @Input()
  color: ThemePalette = undefined;

  @Input()
  max: number = 5;

  @Input()
  value: number = 0;
}
