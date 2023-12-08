import { Component, OnInit } from '@angular/core';
import { RestUserService } from '../../services/restUser/rest-user.service';
import { Router } from '@angular/router';
import { CONNECTION } from '../../services/global';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  token:string;
  user;
  uri;

  constructor(private restUser:RestUserService, private router:Router) {
  }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.user = localStorage.getItem('user');
    this.uri = CONNECTION.URI
  }

  ngDoCheck(){
    this.token = this.restUser.getToken();
    this.user = this.restUser.getUser();
  }

  logOut(){
    localStorage.clear();
    this.router.navigateByUrl('index')
    Swal.fire(
      'Sesión Cerrada',
      'Gracios visitarnos',
      'success'
    )
  }

  onSubmit(){
  }

  acercaDe(){
    Swal.fire({
      title: 'Diego Rodrigo Mercadal Reyes',
      text: 'Carnet: 2016490  Código Tecnico: IN6AM',
      imageUrl: '../../../assets/img/YO.jpg',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
    })
  }
}
