import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowErrorsComponent } from './components/show-errors/show-errors.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { InputComponent } from './components/fields/input/input.component';
import { SelectComponent } from './components/fields/select/select.component';
import { PasswordComponent } from './components/fields/password/password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TrimDirective } from './directives/trim/trim.directive';
import { NumberOnlyDirective } from './directives/number-only/number-only.directive';
import { CheckboxComponent } from './components/fields/checkbox/checkbox.component';
import { AddMoreFieldsComponent } from './components/fields/add-more-fields/add-more-fields.component';
import { PaginationComponent } from './components/pagination/pagination.component';


@NgModule({
  declarations: [
    ShowErrorsComponent, DynamicFormComponent, 
    InputComponent, SelectComponent, 
    PasswordComponent, TrimDirective, NumberOnlyDirective, CheckboxComponent, AddMoreFieldsComponent, PaginationComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule
  ], exports: [
    DynamicFormComponent, PaginationComponent
  ]
})
export class UtilityModule { }
