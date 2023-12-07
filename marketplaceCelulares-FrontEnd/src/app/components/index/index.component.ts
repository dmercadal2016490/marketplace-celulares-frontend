import { Component, OnInit } from '@angular/core';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  user:User;
  token:string;
  userLogged;
  message;

  constructor(private restUser: RestUserService, private router:Router) {
    this.user = new User('','','','','','','','',[])
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.restUser.login(this.user, 'true').subscribe((res:any)=>{
      this.message = res.message;
      if(!res.token){
        alert(res.message);
      }else{
        this.userLogged = res.user;
        this.token = res.token;
        delete this.userLogged.password;

        if(this.token.length <= 0){
          alert('El token no se genero correctamente');
        }else{
          localStorage.setItem('token', this.token);
          localStorage.setItem('user', JSON.stringify(this.userLogged));
          Swal.fire(
            'Logeado',
            'Usuario Logeado Correctamente',
            'success'
          )
          this.router.navigateByUrl('home')
        }
      }
    },
      (error:any) => this.message = error.error.message
    )
  }
}
