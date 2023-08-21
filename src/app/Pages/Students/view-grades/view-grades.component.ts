import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StudentDetailsDto } from 'src/app/_models/StudentAllDetailsDto';
import { StudentSubject } from 'src/app/_models/StudentAllDetailsDto'; 
import { StudentService } from 'src/app/Services/Students/Student.service';
@Component({
  selector: 'app-view-grades',
  templateUrl: './view-grades.component.html',
  styleUrls: ['./view-grades.component.css']
})
export class ViewGradesComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router,private studentService :StudentService) {}
  student:StudentDetailsDto= new StudentDetailsDto;
  async ngOnInit() {

   const id = this.route.snapshot.params['id'];
   console.log('id:', id);
  
   await this.studentService.viewGrade(id).subscribe(
      (student:StudentDetailsDto) => {
        this.student = student;
       
      //  this.totalGrade = this.calculateGrade(120, this.totalMarks);
      //  this.totalArabicGrade = this.calculateGrade(60, this.totalArabicMarks);
      //  this.totalScienceGrade = this.calculateGrade(60, this.totalScienceMarks);
        console.log(this.student);
      }, (err) => {
        alert("There was a problem logging you out");
      }
    );
    
   
  }

  goBack() {
    
    this.router.navigate(['/StudentDetails']); 
  }


 

  
  //Grades: A (90%) – B (75%) – C (65%) - D(>=50%) -F(<50%)
  calculateGrade(maxMark:number,mark:number):string {

    var markInPercentage  = (mark/maxMark) * 100 ;
    console.log(markInPercentage);
    if  (markInPercentage <= 100 && markInPercentage >=  90){return "A";}
    if  (markInPercentage <  90  && markInPercentage >=  75){return "B";}
    if  (markInPercentage <  75  && markInPercentage >=  65){return "C";}
    if  (markInPercentage <  65  && markInPercentage >=  50){return "D";}
    if  (markInPercentage <  50 ){return "F";}
    else{
      return "F";
   }
 }
}