import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowErrorsComponent } from './components/show-errors/show-errors.component';
import { NumberOnlyDirective } from './directives/number-only/number-only.directive';
import { TrimDirective } from './directives/trim/trim.directive';
import { DynamicFormBuilderComponent } from './components/dynamic-form-builder/dynamic-form-builder.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { InputTextComponent } from './components/form-builder/fields/input-text/input-text.component';
import { InputPasswordComponent } from './components/form-builder/fields/input-password/input-password.component';
import { ButtonComponent } from './components/form-builder/fields/button/button.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ShowErrorsComponent,
    NumberOnlyDirective,
    TrimDirective,
    DynamicFormBuilderComponent,
    FormBuilderComponent,
    InputTextComponent,
    InputPasswordComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule
  ],
  exports: [
    ShowErrorsComponent, NumberOnlyDirective,
    TrimDirective, DynamicFormBuilderComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UtilityModule { }
