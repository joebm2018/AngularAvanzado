import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

const appRutas: Routes = [
    {path:'', loadChildren:'./pages/pages.module#PagesModule'},
    {path: 'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path: '**', component: NopagefoundComponent}
];
export const APP_ROUTES = RouterModule.forRoot(appRutas,{useHash: true});