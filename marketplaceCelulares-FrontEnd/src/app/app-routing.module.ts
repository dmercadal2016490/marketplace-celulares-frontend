import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { SavePhoneComponent } from './components/save-phone/save-phone.component';
import { MisComprasComponent } from './components/mis-compras/mis-compras.component';


//Guards
import { LoggedGuardGuard } from './guards/logged-guard.guard';
import { LoggedoutGuardGuard } from './guards/logged-out-guard.guard';
import { AdminGuardGuard } from './guards/admin-guard.guard';
import { NoUserGuardGuard } from './guards/no-user-guard.guard';

const routes: Routes = [
  {path:'', component:IndexComponent},
  {path:'index', canActivate:[LoggedoutGuardGuard],component: IndexComponent},
  {path:'register', canActivate:[LoggedoutGuardGuard],component: RegisterComponent},
  {path:'navbar', component: NavbarComponent},
  {path:'login',canActivate:[LoggedoutGuardGuard], component:LoginComponent},
  {path:'home',canActivate:[LoggedGuardGuard], component:HomeComponent},
  {path:'user',canActivate:[LoggedGuardGuard], component:UserComponent},
  {path:'savePhone', canActivate:[LoggedGuardGuard], component:SavePhoneComponent},
  {path: 'misCompras', canActivate:[LoggedGuardGuard], component: MisComprasComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
