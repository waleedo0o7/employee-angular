import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor( private http:HttpClient  , private router : Router) {}


  username = localStorage.getItem('username');
  password =  localStorage.getItem('password');
  checkInOutData:any;

  checkInOut(){
    let url = "http://5.9.120.68:81/api/Attendance/Check";
    let headers = { 'content-type': 'application/json'};
    let body= {"userName":  this.username ,"password": this.password };

    return this.http.post( url , body , {headers : headers}).subscribe( data => { 
      this.checkInOutData = data;
      console.log(this.checkInOutData);
      
    } , error => {
      console.log(error.error);
      
    })
  }
  
  ngOnInit(): void {
  }

}









