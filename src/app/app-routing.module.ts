import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { AboutComponentComponent } from './components/about-component/about-component.component';
import { ContactComponentComponent } from './components/contact-component/contact-component.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
 // { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: '', component: HomeComponentComponent, canActivate: [AuthGuard] },
  { path: 'Login', component: LoginComponent },
  { path: 'Home', component: HomeComponentComponent ,canActivate: [AuthGuard]},
  { path: 'About', component: AboutComponentComponent,canActivate: [AuthGuard] },
  { path: 'Contact', component: ContactComponentComponent ,canActivate: [AuthGuard]},
  { path: 'Logout', component: LogoutComponent},
  { path: 'Register', component: RegisterComponent },
  { path: '**', component:  ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
