import {
  coerceBooleanProperty,
  coerceNumberProperty,
} from '@angular/cdk/coercion';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

export const NGX_MATERIAL_RATING_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgxMaterialRatingComponent),
  multi: true,
};

export interface NgxMaterialRatingChange {
  source: NgxMaterialRatingComponent;
  value: number | null;
}

type Stars = 'star' | 'star_border';

@Component({
  selector: 'ngx-material-rating',
  exportAs: 'ngxMaterialRating',
  providers: [NGX_MATERIAL_RATING_VALUE_ACCESSOR],
  templateUrl: './ngx-material-rating.component.html',
  styleUrls: ['./ngx-material-rating.component.css'],
})
export class NgxMaterialRatingComponent implements ControlValueAccessor {
  @Input()
  color: ThemePalette = undefined;

  @Input()
  get max(): number {
    return this._max;
  }
  set max(v: number) {
    this._max = coerceNumberProperty(v, this._max);
    this._changeDetectorRef.markForCheck();
  }
  private _max: number = 5;

  @Input()
  get value(): number | null {
    if (this._value === null) {
      this.value = 0;
    }

    return this._value;
  }
  set value(v: number | null) {
    if (v !== this._value) {
      let value = coerceNumberProperty(v);

      if (this._roundToDecimal && value !== 0 && value !== this.max) {
        value = parseFloat(value.toFixed(this._roundToDecimal));
      }

      this._value = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  private _value: number | null = null;
  private _roundToDecimal: number = 1;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled: boolean = false;

  @Input()
  get dense(): boolean {
    return this._dense;
  }
  set dense(value: boolean) {
    this._dense = coerceBooleanProperty(value);
  }
  private _dense: boolean = false;

  @Input()
  get readonly(): boolean {
    return this._readonly;
  }
  set readonly(value: boolean) {
    this._readonly = coerceBooleanProperty(value);
  }
  private _readonly: boolean = false;

  @Output()
  readonly change: EventEmitter<NgxMaterialRatingChange> = new EventEmitter<NgxMaterialRatingChange>();
  readonly valueChange: EventEmitter<number | null> = new EventEmitter<
    number | null
  >();

  onTouched: () => any = () => {};
  private _cvaChangeFn: (value: any) => void = () => {};

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: (value: any) => void) {
    this._cvaChangeFn = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  onClick(index: number) {
    if (this.disabled || this.readonly) {
      return;
    }

    const newValue = index + 1;
    this.value = this.value === newValue ? index : newValue;
    this._emitChangeEvent();
  }

  getStar(index: number): Stars {
    const value = this.value || 0;

    if (index < value) {
      return 'star';
    }

    return 'star_border';
  }

  private _emitChangeEvent() {
    this._cvaChangeFn(this.value);
    this.valueChange.emit(this.value);
    this.change.emit({ source: this, value: this.value });
  }
}
