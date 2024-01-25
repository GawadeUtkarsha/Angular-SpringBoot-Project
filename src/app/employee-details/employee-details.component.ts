import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  
  id: number=0;
  employee: Employee = new Employee();
  constructor(private route: ActivatedRoute,private employeeservice:EmployeeserviceService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  
    this.employeeservice.getEmployeeById(this.id).subscribe(
      data => {
        this.employee = data;
        console.log('Employee Data:', this.employee);
      },
      error => {
        console.error('Error fetching employee details:', error);
      }
    );
  }
}
