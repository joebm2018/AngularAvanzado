import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';

import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PAGES_ROUTES } from './pages.route';




@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Grafica1Component,
        PagesComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Grafica1Component,
        PagesComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
})
export class PagesModule { }
