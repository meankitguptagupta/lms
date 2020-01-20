import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowErrorsComponent } from './components/show-errors/show-errors.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { TextComponent } from './components/dynamic-form/text/text.component';
import { PasswordComponent } from './components/dynamic-form/password/password.component';
import { ButtonComponent } from './components/dynamic-form/button/button.component';

import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ShowErrorsComponent, DynamicFormComponent, TextComponent, PasswordComponent, ButtonComponent],
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule
  ],
  exports: [
    DynamicFormComponent
  ]
})
export class SharedModule { }
