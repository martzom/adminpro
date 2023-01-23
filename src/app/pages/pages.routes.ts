import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { PageComponent } from "./page.component";
import { ProgressComponent } from "./progress/progress.component";

const pagesRoutes: Routes=[
    {
        path: '',
        component: PageComponent,
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'progress', component: ProgressComponent },
          { path: 'graficas1', component: Graficas1Component },
          {path:'', redirectTo:'/dashboard', pathMatch: 'full'},
        ]
      }
];

export const PAGES_ROUTES=RouterModule.forChild(pagesRoutes);