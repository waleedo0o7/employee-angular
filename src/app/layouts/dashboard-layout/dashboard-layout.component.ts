import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {

  constructor( private router : Router) { }


  logOut(){ 
      localStorage.clear();
      this.router.navigate(['/auth/login']); 
  }

  ngOnInit(): void {
    if(!localStorage.getItem("username")){
      this.router.navigate(['/auth/login']);
    }
  }

}
