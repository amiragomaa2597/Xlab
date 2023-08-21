import { Component , OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {  FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import{Router,ActivatedRoute}from'@angular/router';
import { StudentService } from 'src/app/Services/Students/Student.service';
import { StudentDetailsDto } from 'src/app/_models/StudentAllDetailsDto';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit{
  EditStudentForm = new FormGroup(
  
    {
      name : new FormControl('', [
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

     StudentToBeEdited = new StudentDetailsDto();
  constructor(private route: ActivatedRoute,private router: Router,private studentService :StudentService) {}
  ngOnInit(): void {
    
   // this.EditStudentForm?.controls['name']?.setValue ( this.StudentToBeEdited.studentName);
    //this.StudentToBeEdited.nationalId = this.EditStudentForm?.controls['NationalId']?.value?.toString() as string;
    //this.StudentToBeEdited.currentAcademicYear = this.EditStudentForm?.controls['AcademicYear']?.value?.toString() as string;
  }
 

   async onSubmit()  {
    this.StudentToBeEdited.studentName = this.EditStudentForm?.controls['name']?.value?.toString() as string;
    this.StudentToBeEdited.nationalId = this.EditStudentForm?.controls['NationalId']?.value?.toString() as string;
    this.StudentToBeEdited.currentAcademicYear = this.EditStudentForm?.controls['AcademicYear']?.value?.toString() as string;
  // this.EditStudentForm.controls['name'].setValue ( 'Amira') ;
  const id = this.route.snapshot.params['id'];
  console.log('id:', id);
       console.log(this.StudentToBeEdited);
       await this.studentService.EditStudentById(id,this.StudentToBeEdited).subscribe(
        (res) => {
         // if (res.status == 200) {
           // console.log(res);
         // }
        }, (err) => {
          alert("There was a problem logging you out");
        }
        );
       

  await this.router.navigate(['/StudentDetails']);
  location.reload();
  }
 
  async goBack()
  {
    await this.router.navigate(['/StudentDetails']);
    location.reload();
  }
  changeValue(e: any){
    this.EditStudentForm.controls['AcademicYear'].setValue(e.target.value, {
      onlySelf: true,
    });
    console.log(this.EditStudentForm.controls['AcademicYear'].value);
  }
}
