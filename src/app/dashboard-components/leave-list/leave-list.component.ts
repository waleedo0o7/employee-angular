import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leave-list',
  templateUrl: './leave-list.component.html',
  styleUrls: ['./leave-list.component.scss']
})
export class LeaveListComponent implements OnInit {

  constructor( private http:HttpClient  , private router : Router) {}


    
  p: number = 1;
  itemsPerPageValue = 4;
  totalPagesValue:any ;
  totalItemsCount:any;


  test( e:any ) {
    console.log(e);
  }


  
  username = localStorage.getItem('username');
  password =  localStorage.getItem('password');

  allLeaves:any;

  
  getAllLeaves(pageSize :number,pageIndex :number){
    let url = `http://5.9.120.68:81/api/Leave/EmployeeRequests/${pageSize}/${pageIndex}`;
    let headers = { 'content-type': 'application/json'};
    let body= {"userName":  this.username ,"password": this.password };

    return this.http.post( url , body , {headers : headers}).subscribe( data => { 
      this.allLeaves = data;
      this.totalItemsCount = this.allLeaves.body.totalCount;
      console.log(this.allLeaves);      
    } , error => {
      console.log(error.error);
    })
  }


  ngOnInit(): void {
    this.getAllLeaves(4,1)
  }

}
