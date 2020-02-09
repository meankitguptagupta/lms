import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowErrorsComponent } from './components/show-errors/show-errors.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { TextComponent } from './components/dynamic-form/text/text.component';
import { PasswordComponent } from './components/dynamic-form/password/password.component';
import { ButtonComponent } from './components/dynamic-form/button/button.component';

import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { TrimDirective } from './directives/trim/trim.directive';
import { NumberOnlyDirective } from './directives/number-only/number-only.directive';
import { SelectComponent } from './components/dynamic-form/select/select.component';
import { CheckboxComponent } from './components/dynamic-form/checkbox/checkbox.component';
import { FileComponent } from './components/dynamic-form/file/file.component';

@NgModule({
  declarations: [ShowErrorsComponent, DynamicFormComponent, TextComponent, PasswordComponent, ButtonComponent, TrimDirective, NumberOnlyDirective, SelectComponent, CheckboxComponent, FileComponent],
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule
  ],
  exports: [
    DynamicFormComponent
  ]
})
export class SharedModule { }
