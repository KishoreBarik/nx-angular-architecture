import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


export const dashboardRoutes: Route[] = [{ path: "dashboard", component: DashboardComponent}]

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: "", component: DashboardComponent}
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
  declarations: [DashboardComponent],
})
export class App1DashboardModule {}
