import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SharedUiModule } from '@nx-angular-architecture/shared/ui';

@NgModule({
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class SharedFeatureLoginModule {}
