import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

type Stars = 'star' | 'star_border';

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

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled: boolean = false;

  getStar(index: number): Stars {
    const value = this.value || 0;

    if (index < value) {
      return 'star';
    }

    return 'star_border';
  }
}
