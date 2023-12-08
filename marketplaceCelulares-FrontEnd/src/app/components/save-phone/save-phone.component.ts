import { Component, OnInit } from '@angular/core';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { UploadImageService } from 'src/app/services/uploadImage/upload-image.service';
import { RestPhoneService } from 'src/app/services/restPhone/rest-phone.service';
import { Phone } from 'src/app/models/phone';
import { CONNECTION } from 'src/app/services/global';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-save-phone',
  templateUrl: './save-phone.component.html',
  styleUrls: ['./save-phone.component.css']
})
export class SavePhoneComponent implements OnInit {
  user;
  token;
  phone:Phone;
  message;

  constructor(private restUser:RestUserService, private restPhone:RestPhoneService, private router:Router){
    this.user = this.restUser.getUser();
    this.token = this.restUser.getToken();
    this.phone = new Phone('','','','','','',null,null,null,'',[]);
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    this.restPhone.savePhone(this.user._id, this.phone).subscribe((res:any)=>{
      if(res.userPushed){
       Swal.fire(
        'Creado',
        'Telefono publicado exitosamente',
        'success'
       )
       this.phone = new Phone('','','','','','',null,null,null,'',[]);
       form.reset();
       this.router.navigateByUrl('home')
      }else{
        Swal.fire(
          'Error',
          res.message,
          'error'
        )
      }
    },
    error => alert(<any>error)
    )
  }
}
