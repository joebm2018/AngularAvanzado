import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSetingsComponent } from './account-setings/account-setings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const pagesRoute:Routes=[
    {
        path: '', 
        component: PagesComponent,
        children:[
            {path: 'dashboard', component: DashboardComponent, data:{titulo: 'Dasboard'}},
            {path: 'progress', component: ProgressComponent, data:{titulo: 'Progress'}},
            {path: 'graficas1', component: Grafica1Component, data:{titulo: 'Graficas'}},
            {path: 'account-settings', component: AccountSetingsComponent, data:{titulo: 'Ajustes del Tema'}},
            {path: 'promesas', component: PromesasComponent, data:{titulo: 'Promesas'}},
            {path: 'rxjs', component: RxjsComponent, data:{titulo: 'RxJs'}},
            {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
        ]
    },
];
export const PAGES_ROUTES = RouterModule.forChild(pagesRoute);