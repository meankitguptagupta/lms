import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { ShowErrorsComponent } from './components/show-errors/show-errors.component';
import { PaginationComponent } from './components/pagination/pagination.component';

// directives
import { TrimDirective } from './directives/trim/trim.directive';
import { NumberOnlyDirective } from './directives/number-only/number-only.directive';


@NgModule({
  declarations: [
    ShowErrorsComponent, PaginationComponent,
    TrimDirective, NumberOnlyDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShowErrorsComponent, PaginationComponent,
    TrimDirective, NumberOnlyDirective
  ]
})
export class UtilityModule { }
