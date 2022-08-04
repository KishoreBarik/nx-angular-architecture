import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, InputComponent, HeaderComponent],
  exports: [ButtonComponent, InputComponent, HeaderComponent],
})
export class SharedUiModule {}
