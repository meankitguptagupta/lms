import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowErrorsComponent } from './components/show-errors/show-errors.component';



@NgModule({
  declarations: [
    ShowErrorsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShowErrorsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UtilityModule { }
