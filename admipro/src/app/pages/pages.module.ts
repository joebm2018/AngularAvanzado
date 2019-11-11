import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms'

// ng2-charts
import { ChartsModule } from 'ng2-charts';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { PAGES_ROUTES } from './pages.route';
//temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { AccountSetingsComponent } from './account-setings/account-setings.component';

@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Grafica1Component,
        PagesComponent,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccountSetingsComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Grafica1Component,
        PagesComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})
export class PagesModule { }
