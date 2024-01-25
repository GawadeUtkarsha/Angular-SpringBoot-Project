import { Component, OnInit } from '@angular/core';
import { Employee } from "../employee";
import { EmployeeserviceService } from '../employeeservice.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {
  
  // employee: Employee = { id: 0, firstname: '', lastname: '', emailId: '' };
   id: number=0;
   employee: Employee= new Employee();
  constructor(private employeeService: EmployeeserviceService,
    private route:ActivatedRoute,
    private router:Router) {}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee=data;
    },
    error =>console.log(error)
    );
    
  }

  onSubmit() {
    // Implement your form submission logic here
    // console.log('Form submitted:', this.employee);
    this.employeeService.updateEmployee(this.id, this.employee).subscribe( data =>{
     this.goToEmployeeList();
    },
     error => console.log(error));
}
goToEmployeeList(){
  this.router.navigate(['/employees']);
}
}