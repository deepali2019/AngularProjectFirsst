import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../employee.service';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Employee } from './../employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:any;
  constructor(private service:EmployeeService,private http:HttpClient,private router:Router) { }

  ngOnInit() {
  }
  getUsers()
  {
         
         let resp=this.service.getEmployeesList();
         resp.subscribe(data=>this.users=data);
         this.router.navigate(["/employees"])
         
  }

  AddEmployee()
  {
    let resp=this.service.createEmployee(new Employee);
    resp.subscribe(data=>this.users=data);
    this.router.navigate(["/add"])
  }

}
