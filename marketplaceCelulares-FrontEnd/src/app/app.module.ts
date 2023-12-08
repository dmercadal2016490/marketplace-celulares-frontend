import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ​​​ChartsModule }​​​from 'ng2-charts';


import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { SavePhoneComponent } from './components/save-phone/save-phone.component';
import { MisComprasComponent } from './components/mis-compras/mis-compras.component';
import { MyComprasComponent } from './components/my-compras/my-compras.component';
import { VerTransaccionesComponent } from './components/ver-transacciones/ver-transacciones.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    NotFoundComponent,
    RegisterComponent,
    SavePhoneComponent,
    MisComprasComponent,
    MyComprasComponent,
    VerTransaccionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ​​​ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
