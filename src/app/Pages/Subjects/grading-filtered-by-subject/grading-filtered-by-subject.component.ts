import { Component, OnInit } from '@angular/core';

import{Router,ActivatedRoute}from'@angular/router';
import {DeleteService}from 'src/app/Services/Students/delete.service';
import { StudentDetailsDto, StudentSubject } from 'src/app/_models/StudentAllDetailsDto';
import { StudentService } from 'src/app/Services/Students/Student.service';
@Component({
  selector: 'app-grading-filtered-by-subject',
  templateUrl: './grading-filtered-by-subject.component.html',
  styleUrls: ['./grading-filtered-by-subject.component.css']
})
export class GradingFilteredBySubjectComponent implements OnInit{
 
  filterValue : String = "0";
  constructor(private route: ActivatedRoute,private router: Router,private DeleteService:DeleteService,private studentService : StudentService) {
    
  }
  students:StudentDetailsDto[]= [];
  async ngOnInit() {
    await this.studentService.getAllStudents().subscribe(
      (students: StudentDetailsDto[]) => {
        this.students = students;
        console.log(this.students);
        this.calculateGrades()
        
      },
      (error: any) => {
        // Handle error
      }
    );
 
 
 }
  
 changeValue(e: any){
  this.filterValue=e.target.value;
  console.log(this.filterValue);
}
  
calculateGrades()
{
  this.students.forEach(student => {
    student.totalterm1 = student.term1Arabic!+student.term1Science!;
    student.totalterm2 = student.term2Arabic!+student.term2Science!;
    student.total = student.totalterm1!+student.totalterm2!;

    
  });
}

editMarks(student:StudentDetailsDto ){
  this.router.navigate(['/EditMarks/',this.filterValue,student.studentId,student.studentName,student.currentAcademicYear] );
}

getSucceedStudentsCountScience(){
  var count = 0 ;
this.students.forEach(student => {
if ( student.term1Science! +student.term2Science! >= 30 )
{
 count++;
}  
});
return count ;
}

getFailStudentsCountScience(){
  var count = 0 ;
this.students.forEach(student => {
if ( student.term1Science! +student.term2Science! <= 30 )
{
 count++;
}  
});
return count ;
}


getSucceedStudentsCountArabic(){
  var count = 0 ;
this.students.forEach(student => {
if ( student.term1Arabic! +student.term2Arabic! >= 30 )
{
 count++;
}  
});
return count ;
}

getFailStudentsCountArabic(){
  var count = 0 ;
this.students.forEach(student => {
if ( student.term1Arabic! +student.term2Arabic! <= 30 )
{
 count++;
}  
});
return count ;
}
 }

  


  
  

 
  

