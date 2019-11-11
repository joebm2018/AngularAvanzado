import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//RUTAS
import { APP_ROUTES } from './app.routes';
//TEMPORAL
import { FormsModule } from '@angular/forms';
//MODULOS
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { ServiceModule } from './services/service.module';
// import { IncrementadorComponent } from './components/incrementador/incrementador.component';
import { SettingsService } from './services/settings/settings.service';

// SettingsService

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    // IncrementadorComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ServiceModule
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
