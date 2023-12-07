import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { User } from '../../models/user';
import { RestUserService } from '../../services/restUser/rest-user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user: User;
  public username: string;
  message;

  constructor(private restUser:RestUserService, private router:Router) {
    this.user = new User('','','','','','','ROLE_USER','',[]);
  }

  ngOnInit(): void {
  }

  onSubmit(statusForm){
    this.restUser.saveUser(this.user).subscribe((res:any)=>{
      if(res.userSaved){
        Swal.fire(
          'Creado',
          res.message,
          'success',
        )
        statusForm.reset();
        this.user = new User('','','','','','','','',[]);
        this.router.navigateByUrl('index');
      }else{
        Swal.fire(
          'Error',
          res.message,
          'error'
        )
      }
    },
    (error:any) => this.message = error.error.message
    )
  }

}

