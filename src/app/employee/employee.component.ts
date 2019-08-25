import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
email;
id=-1;
password;
gender;
phone;
address;
employess:any=[];
showform:any;
showlist:any;
  constructor(private empServiceService:EmpServiceService) { }

  ngOnInit() {
   
    this.getEmployeeDetails();
    this.showform=true;
    this.showlist=false;
  }

  createEmployee(){
    console.log("this.email",this.email);
    var empid=this.id;
    var data={
      "id":this.id,
      "email":this.email,
     "pasword":this.password,
     "gender":this.gender,
     "phone":this.phone,
     "address":this.address
    }
    if(empid==-1){
    
    this.empServiceService.saveEmployee(data).subscribe(data=>{
      this.getEmployeeDetails();
alert("data saved sucessfully");
this.showlist=true;
this.showform=false;
    });
  }
  else{
    console.log("empd",empid);
    this.empServiceService.editEmployee(data,empid).subscribe(data=>{
      this.getEmployeeDetails();
      this.showlist=true;
      this.showform=false;
    });
  } 
  
  }
  editEmployee(value){
    this.id=value.id;
   this.email=value.email;
   this.password=value.pasword;
   this.gender=value.gender;
   this.address=value.address;
   this.phone=value.phone;
   this.showlist=false;
   this.showform=true;
  }
  getEmployeeDetails(){
    this.empServiceService.getEmployee().subscribe(data=>{
    this.employess=data;
    console.log("array",data);
    })

  }

  deleteEmployeeDetails(value,index){
  var edid=value.id;
    this.empServiceService.deleteEmployee(edid).subscribe(data=>{
      alert("Data Deleted SuccessFully");
      this.employess.splice(index,1);
      if(this.employess.length==0){
        this.showform=true;
        this.showlist=false;
      }
    })
  }

}
