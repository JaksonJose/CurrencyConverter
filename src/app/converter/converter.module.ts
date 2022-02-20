import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ConverterComponent } from './components/converter.component';
import { ConverterService, CurrencyService } from './services';
import { NumberDirective } from './directives';

@NgModule({
  declarations: [
    ConverterComponent,
    NumberDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    ConverterComponent
  ],
  providers: [
    CurrencyService,
    ConverterService
  ]
})
export class ConverterModule { }
