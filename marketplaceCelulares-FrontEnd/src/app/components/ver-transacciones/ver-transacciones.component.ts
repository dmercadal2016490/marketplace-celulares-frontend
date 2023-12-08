import { Component, OnInit } from '@angular/core';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { RestPhoneService } from 'src/app/services/restPhone/rest-phone.service';
import { Router } from '@angular/router';
import { CONNECTION } from 'src/app/services/global';
import { Transaccion } from 'src/app/models/transacciones';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-ver-transacciones',
  templateUrl: './ver-transacciones.component.html',
  styleUrls: ['./ver-transacciones.component.css']
})
export class VerTransaccionesComponent implements OnInit {

  constructor(private restUser:RestUserService,private restPhone:RestPhoneService ,private router:Router) {
    this.uri = CONNECTION.URI;
  }

  ngOnInit(): void {
    this.user = this.restUser.getUser();
    this.token = this.restUser.getToken();
    this.transacciones = localStorage.getItem('transacciones');
    this.verTransacciones();
  }

  public uri:string;
  user;
  transacciones;
  token;

  verTransacciones(){
    this.restPhone.getTransacciones(/*this.user._id*/).subscribe((res:any)=>{
      if(res.transacciones){
        alert('Transacciones')
        console.log(res.transacciones)
        this.transacciones = res.transacciones;
        localStorage.setItem('transacciones', this.transacciones);
      }else{
        Swal.fire(
          'Error',
          res.message,
          'warning'
        )
      }
    },
    error => console.log(<any>error)
    )
  }
}
