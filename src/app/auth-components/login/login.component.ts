import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor( private http:HttpClient  , private router : Router ) { }

  userData : any ;

  login( username:any , password : any){

    console.log(username , password);
    
    let url = "http://5.9.120.68:81/api/User/Authenticate";
    let headers = { 'content-type': 'application/json'};
    let body= {"userName": username ,"password": password };
    return this.http.post(url, body,{'headers':headers}).subscribe(data =>{
      this.userData = data ;
      console.log(this.userData);
      localStorage.setItem("username" , username);
      localStorage.setItem("password" , password);
      this.router.navigate(['/admin/dashboard']);
    } , error =>{
      alert("Invalid Data")
    })
  }  
  ngOnInit(): void {
    if(localStorage.getItem("username")){
      this.router.navigate(['/admin/dashboard']);
    }
  }

}