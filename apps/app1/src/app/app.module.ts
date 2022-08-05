import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { SharedFeatureLoginModule } from '@nx-angular-architecture/shared/feature/login';
import { App1DashboardModule, dashboardRoutes } from '@nx-angular-architecture/app1/dashboard';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    SharedFeatureLoginModule,
    RouterModule.forRoot([{path: "dashboard", loadChildren: () => import('@nx-angular-architecture/app1/dashboard').then((module) => module.App1DashboardModule)}], { initialNavigation: "enabledNonBlocking" }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
