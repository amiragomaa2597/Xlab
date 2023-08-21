import { Component ,OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import {  FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/Services/Students/Student.service';
import { StudentDetailsDto } from 'src/app/_models/StudentAllDetailsDto';
@Component({
  selector: 'app-add-subject-smarks',
  templateUrl: './add-subject-smarks.component.html',
  styleUrls: ['./add-subject-smarks.component.css']
})
export class AddSubjectSMarksComponent implements OnInit {
   student : StudentDetailsDto = new StudentDetailsDto;
   filterValue = this.route.snapshot.params['filterValue'];
   id = this.route.snapshot.params['id'];
   name = this.route.snapshot.params['name'];
   academicYear = this.route.snapshot.params['academicYear'];
   AddStudentForm = new FormGroup(
  
    {
      name : new FormControl(),
      NationalId : new FormControl(''),
      AcademicYear : new FormControl(),
      Term1: new FormControl('',[
        Validators.required,
        Validators.pattern("^(?:[0-9]|[12][0-9]|30)$")
      ]
        ),
      Term2 : new FormControl('',[
        Validators.required,
        Validators.pattern("^(?:[0-9]|[12][0-9]|30)$")
      ])
    }
     );
   constructor(private route: ActivatedRoute,private router: Router,private studentService :StudentService) {}
   
   async ngOnInit(){
   console.log('id:', this.id);
   console.log('filterValue:', this.filterValue);
   this.AddStudentForm.controls['AcademicYear'].setValue(this.academicYear);
   this.AddStudentForm.controls['name'].setValue(this.name);
  }
  
    
     async onSubmit() {
    var term1 =this.AddStudentForm?.controls['Term1']!.value?.toString() as string;
    var term2 =this.AddStudentForm?.controls['Term2']!.value?.toString() as string;
        await this.studentService.EditMarks(this.id,this.filterValue,term1,term2).subscribe(
          (res) => {
           // if (res.status == 200) {
           //   console.log(res);
           // }
          }, (err) => {
            alert("There was a problem logging you out");
          }
          );
         await  this.router.navigate(['/Subjects']);
          location.reload();
      }
     
      goBack()
      {
        this.router.navigate(['/Subjects']);
        location.reload();
      }
}
