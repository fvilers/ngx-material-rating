import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

type Rating = {
  value: number;
  max: number;
  color?: ThemePalette;
  disabled?: boolean;
  dense?: boolean;
  readonly?: boolean;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ratings: Rating[] = [
    {
      value: 1,
      max: 10,
      color: 'primary',
    },
    {
      value: 2,
      max: 5,
      color: 'accent',
    },
    {
      value: 3,
      max: 10,
      color: 'warn',
    },
    {
      value: 4,
      max: 5,
    },
    {
      value: 5,
      max: 10,
      disabled: true,
    },
    {
      value: 1,
      max: 5,
      color: 'primary',
      dense: true,
    },
    {
      value: 2,
      max: 5,
      color: 'accent',
      readonly: true,
    },
  ];
}
