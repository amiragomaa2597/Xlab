import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {  FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddStudentDto } from 'src/app/_models/AddStudentDto';
import{StudentService}from 'src/app/Services/Students/Student.service';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  constructor(private router: Router , private studentService:StudentService) {

  }
  AddStudent : AddStudentDto = new AddStudentDto("Student","00000000000000","Primary one");
  AddStudentForm = new FormGroup(
  
    {
      name : new FormControl('',[
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$')
      ]),
      NationalId : new FormControl('',[
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(14),
      ]),
      AcademicYear : new FormControl('',Validators.required)
    
    }
     );
    
      onSubmit() {
       this.AddStudent.studentName = this.AddStudentForm?.controls['name']?.value?.toString() as string;
       this.AddStudent.nationalId = this.AddStudentForm?.controls['NationalId']?.value?.toString() as string;
       this.AddStudent.currentAcademicYear = this.AddStudentForm?.controls['AcademicYear']?.value?.toString() as string;
       console.log(this.AddStudent);
       //console.log(this.studentService.AddStudent(this.AddStudent));
       this.studentService.AddStudent(this.AddStudent).subscribe(
        (res) => {
          if (res.status == 200) {
            console.log(res);
            this.router.navigate(['/StudentDetails']);
          }
        }, (err) => {
          alert("There was a problem logging you out");
        });
       

      }
     
      goBack()
      {
        this.router.navigate(['/StudentDetails']);
      
      }
      changeValue(e: any){
        this.AddStudentForm.controls['AcademicYear'].setValue(e.target.value, {
          onlySelf: true,
        });
        console.log(this.AddStudentForm.controls['AcademicYear'].value);
      }
}
