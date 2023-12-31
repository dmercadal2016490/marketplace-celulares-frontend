import { Component, OnInit } from '@angular/core';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { RestPhoneService } from 'src/app/services/restPhone/rest-phone.service';
import { Router } from '@angular/router';
import { Compra } from 'src/app/models/compra';
import { CONNECTION } from 'src/app/services/global';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-mis-compras',
  templateUrl: './mis-compras.component.html',
  styleUrls: ['./mis-compras.component.css']
})
export class MisComprasComponent implements OnInit {

  constructor(private restUser:RestUserService,private restPhone:RestPhoneService ,private router:Router) {
    this.uri = CONNECTION.URI;
  }

  ngOnInit(): void {
    this.user = this.restUser.getUser();
    this.token = this.restUser.getToken();
    this.compras = localStorage.getItem('compras');
    this.verCompras();	
  }

  public uri:string;
  user;
  compras;
  token;

  verCompras(){
    this.restPhone.getMyCompras(this.user._id).subscribe((res:any)=>{
      if(res.compras){
        this.compras = res.compras.compras;
        localStorage.setItem('compras', JSON.stringify(this.compras));
      }else{
        Swal.fire(
          'Error',
          res.message,
          'warning'
        )
      }
    },
    error => alert(<any>error)
    )
  }
}
