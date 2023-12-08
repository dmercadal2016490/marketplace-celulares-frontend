import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CONNECTION } from '../global'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestPhoneService {
  public uri:string
  public httpOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  
  public httpOptionsAuth ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : this.getToken()
    })
  }

  public user;
  public token;

  private extractData(res: Response){
    let body = res;
    return body || [] || {};
  }

  constructor(private http: HttpClient) {
    this.uri = CONNECTION.URI;
  }

  getUser(){
    let user = JSON.parse(localStorage.getItem('user'));
    if(user != undefined || user != null){
      this.user = user
    }else{
      this.user = null;
    }
    return this.user;
  }

  getToken(){
    let token = localStorage.getItem('token');
    if(token != undefined || token != null){
      this.token = token;
    }else{
      this.token = null
    }
    return this.token;
  }

  getPhones(){
    return this.http.get(this.uri + 'getPhones', this.httpOptions)
      .pipe(map(this.extractData))
  }

  comprar(IdUser, idPhone, phone){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
    let params = JSON.stringify(phone);
    return this.http.put(this.uri + 'comprar/'+IdUser+'/'+idPhone,params,{headers:headers})
      .pipe(map(this.extractData))
  }

  deletePhone(idUser,idPhone){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
    return this.http.delete(this.uri +'/deletePhone/'+ idUser+'/'+idPhone, {headers:headers})
      .pipe(map(this.extractData))
  }

  savePhone(idUser, phone){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
    let params = JSON.stringify(phone);
    return this.http.put(this.uri +'savePhone/'+ idUser, params ,{headers:headers})
      .pipe(map(this.extractData))
  }

  getMyCompras(idUser){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
    return this.http.get(this.uri +'getMyCompras/'+ idUser,{headers:headers})
      .pipe(map(this.extractData))
  }

  getTransacciones(/*idUser*/){
    /*let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })*/
    return this.http.get(this.uri +'getTrasacciones', this.httpOptions)
      .pipe(map(this.extractData))
  }
}
