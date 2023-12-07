import { Component, OnInit } from '@angular/core';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { UploadImageService } from 'src/app/services/uploadImage/upload-image.service';
import { RestPhoneService } from 'src/app/services/restPhone/rest-phone.service';
import { Phone } from 'src/app/models/phone';
import { CONNECTION } from 'src/app/services/global';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user;
  token;
  phones;
  phone:Phone;
  phoneSelected:Phone;
  public filesToUpload:Array<File>;
  uri;
  message;
  phonesBuscar:[]

  constructor(private restUser:RestUserService,
              private uploadImage: UploadImageService,
              private restPhone:RestPhoneService
              ) {
    this.user = this.restUser.getUser();
    this.token = this.restUser.getToken();
    this.uri = CONNECTION.URI;
  }

  ngOnInit(): void {
    this.phones = localStorage.getItem('phones');
    this.phone;
    this.phone = new Phone('','','','','','',null,null,null,'',[]);
    this.verPhones();
  }

  refreshPage() {
    window.location.reload();
  }

  fileChange(fileInput){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload)
  }

  verPhones(){
    this.restPhone.getPhones().subscribe((res:any)=>{
      if(res){
        this.phones = res.phones;
        this.phonesBuscar = res.phones;
        localStorage.setItem('phones', this.phones);
        localStorage.setItem('phonesBuscar', JSON.stringify(this.phonesBuscar))
        console.log(this.phones);
      }else{
        alert(res.message);
      }
    })
  }

  obtenerData(phoneSelected){
    this.phone = phoneSelected;
    localStorage.setItem('phoneSelected', JSON.stringify(phoneSelected));
  }

  comprar(){
    this.restPhone.comprar(this.user._id, this.phone._id, this.phone).subscribe((res:any)=>{
      if(res.compraSaved){
        Swal.fire(
          'Exito',
          'Compra realizada con exito',
          'success',
        ).then(this.refreshPage)
        localStorage.setItem('phoneSelected', JSON.stringify(res.menos))
      }else{
        Swal.fire(
          'Error',
          res.message,
          'error'
        ).then(this.refreshPage)
      }
    },
    error=> alert(error.error.message)
    )
  }

  subirImagen(){
    this.uploadImage.fileRequestPhone(this.user._id, this.phone._id,[],this.filesToUpload,this.token,'image').then((res:any)=>{
      if(res.phone){
        this.phone.image = res.phoneImage;
        this.phone = res.phone;
        localStorage.setItem('phones', JSON.stringify(this.phone))
        Swal.fire(
          'Exito',
          'Imagen subida con exito',
          'success',
        ).then(this.refreshPage)
        /*this.refreshPage();*/
      }else{
        Swal.fire(
          'Error',
          res.message,
          'error',
        )
      }
    },
    error => alert(<any>error)
    )
  }

  deletePhone(){
    this.restPhone.deletePhone(this.user._id, this.phone._id).subscribe((res:any)=>{
      if(res.phoneDeleted){
        Swal.fire(
          'Eliminado',
          res.message,
          'success',
        ).then(this.refreshPage)
      }else{
        Swal.fire(
          res.message,
          '',
          'warning'
        ).then(this.refreshPage)
      }
    })
  }
}  
