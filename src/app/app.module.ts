import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { LoginComponent } from './components/login/login.component';
import { Routes , RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { AuthGuard } from './shared/guard/auth.guard';
import { TicketComponent } from './components/ticket/ticket.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
const routes: Routes = [
  { path: '', redirectTo: '/ticket', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'home', component:HomeComponent, canActivate: [AuthGuard] },
  { path: 'ticket', component:TicketComponent, canActivate: [AuthGuard] },
  { path: 'login', component:LoginComponent },
  { path: '**', redirectTo: '/home'}
]

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    LoginComponent,
    HomeComponent,
    TicketComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : [],
    RouterModule.forRoot(routes),
     
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
