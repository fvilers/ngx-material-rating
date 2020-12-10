# ngx-material-rating

A Material Design rating component

## Installation

Add the package to your application.

```
npm install --save ngx-material-rating
```

## Demo

https://stackblitz.com/edit/ngx-material-rating-demo

## Getting started

Import the range module to your application module.

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaterialRatingModule } from 'ngx-material-rating';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    NgxMaterialRatingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Using the component

Add the component to your template and use the provided properties to suit your needs:

- color: one of the valid value of [ThemePalette](https://github.com/angular/components/blob/c4b7604838896daf473f92c4ce4354e425db1148/src/material/core/common-behaviors/color.ts#L30)
- disabled: to disable the component
- dense: to have less margin between stars
- value: the rating value, can be used with `[(ngModel)]`
- max: the maximum rating value

Check the [demo](https://stackblitz.com/edit/ngx-material-rating-demo) for more examples.
