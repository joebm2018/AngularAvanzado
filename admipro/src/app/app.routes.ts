import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';



const appRutas: Routes = [
    // {
    //     path: '', 
    //     component: PagesComponent,
    //     children:[
    //         {path: 'dashboard', component: DashboardComponent},
    //         {path: 'progress', component: ProgressComponent},
    //         {path: 'graficas1', component: Grafica1Component},
    //         {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    //     ]
    // },
    {path:'', loadChildren:'./pages/pages.module#PagesModule'},
    {path: 'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path: '**', component: NopagefoundComponent}
];
export const APP_ROUTES = RouterModule.forRoot(appRutas,{useHash: true});