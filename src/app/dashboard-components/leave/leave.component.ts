import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';;

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent implements OnInit {

  constructor( private http:HttpClient  , private router : Router) {}

  username = localStorage.getItem('username');
  password =  localStorage.getItem('password');
  allLeaveTypes:any;


  leaveType:any;
  dateFrom:any;
  dateTo:any;
  description:any;


    getAllLeaveTypes(){
      let url = "http://5.9.120.68:81/api/Leave/AllLeaveTypes";
      let headers = { 'content-type': 'application/json'};
      let body= {"userName":  this.username ,"password": this.password };

      return this.http.post( url , body , {headers : headers}).subscribe( data => { 
        this.allLeaveTypes = data;
        // console.log(this.allLeaveTypes);
        
      } , error => {
        // console.log(error.error);
        
      })
    }



    dateBettwenValue:any;

    dateBettwen( dateFrom:any , dateTo:any ){
      const date1:any = new Date(dateFrom);
      const date2:any = new Date(dateTo);
      const diffTime = Math.abs(date2 - date1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
      if( dateFrom && dateTo ) {
        this.dateBettwenValue = diffDays;
      }
    }


    AddLeaveRequest(myFormData:any){ 
      console.log(myFormData.form);
      let url = "http://5.9.120.68:81/api/Leave/AddLeaveRequest";
      let headers = { 'content-type': 'application/json'};
      let body= {
                 "userName":  this.username ,
                 "password": this.password ,
                 "frmDate": myFormData.form.controls.dateFrom.value,
                 "toDate": myFormData.form.controls.dateTo.value,
                 "leaveTypeId": parseInt(myFormData.form.controls.leaveType.value),
                 "description": myFormData.form.controls.description.value
                };


      // let body= {
      //   "userName":  this.username ,
      //   "password": this.password ,
      //   "frmDate":"2021-06-22",
      //   "toDate":"2021-06-23",
      //   "leaveTypeId":16,
      //   "description":"test description"
      //   };
                
  
      return this.http.post( url , body , {headers : headers}).subscribe( data => {
          console.log(data);
        } , error => {
          console.log(error.error);
        })
  
      }
  

  test(){
  }

  ngOnInit(): void {
    this.getAllLeaveTypes();
    // this.dateBettwen();
  }



}
