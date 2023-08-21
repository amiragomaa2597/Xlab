import { Component, OnInit } from '@angular/core';

import{Router,ActivatedRoute}from'@angular/router';
import {DeleteService}from 'src/app/Services/Students/delete.service';
import { StudentDetailsDto } from 'src/app/_models/StudentAllDetailsDto';
import { StudentService } from 'src/app/Services/Students/Student.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})


export class DetailsComponent implements OnInit{
  constructor(private route: ActivatedRoute,private router: Router,private DeleteService:DeleteService,private studentService : StudentService) {}
  students:StudentDetailsDto[]= [];
  filteredStudents: StudentDetailsDto[] = [];
  searchText: string = '';
  searchBy:string = '';
  
  async ngOnInit() {
    await this.studentService.getAllStudents().subscribe(
      (students: StudentDetailsDto[]) => {
        this.students = students;
        this.filteredStudents = this.students ;
        this.calculateGrade();
        console.log(this.students);
      },
      (error: any) => {
        // Handle error
      }
    );
 
 }

  filterStudents(): void {
    if (this.searchBy && this.searchText) {
      this.filteredStudents = this.students.filter(student => {
        const propertyValue = student[this.searchBy as keyof typeof student];
  
        if (typeof propertyValue === 'string') {
          return propertyValue.toLowerCase().includes(this.searchText.toLowerCase());
        } else if (typeof propertyValue === 'number') {
          return propertyValue.toString()=== this.searchText ;
        }
  
        return false;
      });
    } else {
      this.filteredStudents = this.students;
    }
  }



  addStudent(): void {
    // Add your logic for adding a new student here
    this.router.navigate(['/AddStudent'] );
  }

  viewGrades(student: StudentDetailsDto): void {
    this.router.navigate(['/viewgrades/',student.studentId] );
  }

  editStudent(student: StudentDetailsDto): void {
    this.router.navigate(['/EditStudent/',student.studentId]);
  }


public openConfirmationDialog(student: StudentDetailsDto) {
  this.DeleteService.confirm('Please confirm..', 'Do you really want to delete this student? \n Note that all the Grades will be Deleted too')
    .then((confirmed) => {
      if (confirmed) {
        this.DeleteService.delete(student)
          .then((result) => {
            if (result) {
              // Deletion was successful
              console.log('Student deleted:', student);
              location.reload();
            } else {
              // Deletion failed
              console.log('Failed to delete student:', student);
            }
          })
          .catch((error) => {
            console.log('Error occurred during deletion:', error);
          });
      } else {
        // User canceled the deletion
        console.log('User canceled the deletion');
      }
    })
    .catch(() => {
      console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)');
    });
}

  changeValue(e: any){
    this.searchBy=e.target.value;
    console.log(this.searchBy);
  }

  calculateGrade(){
    this.students.forEach(student => {
      student.total=student.term1Arabic!+student.term2Arabic!+student.term1Science!+student.term1Science!;
    });
  }
}
