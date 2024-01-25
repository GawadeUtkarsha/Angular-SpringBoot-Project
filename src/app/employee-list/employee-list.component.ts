import { Component } from '@angular/core';
import { Employee } from '../employee';
import { OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[]=[];
  constructor(private employeeService: EmployeeserviceService, private router: Router) {}
 
 ngOnInit(): void{
  this.getEmplyees();
 }

 private getEmplyees(){
  this.employeeService.getEmployeesList().subscribe(data =>{
    this.employees=data;
  });
 }

 employeeDetails(id: number){
  this.router.navigate(['employee-details', id]);

 }

 updateEmployee(id: number) {
  this.router.navigate(['updateemployee', id]);
 }

 deleteEmployee(id: number){
  this.employeeService.deleteEmployee(id).subscribe(data =>{
    console.log(data);
    this.getEmplyees();
  })
 }
}
