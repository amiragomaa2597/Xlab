import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddStudentDto } from 'src/app/_models/AddStudentDto';

import { StudentDetailsDto } from 'src/app/_models/StudentAllDetailsDto';
@Injectable({
  providedIn: 'root'
})

export class StudentService {

  constructor(private http:HttpClient) { }

  AddStudent(student: AddStudentDto) {
  
    return this.http.post('https://localhost:7210/api/Student', student,{ observe: 'response' });
   } 


   getAllStudents() {
  
    return this.http.get<any>('https://localhost:7210/api/Student');
   } 



   getStudentById(student: AddStudentDto) {
  
    //return this.http.post('https://localhost:7210/api/Student', student,{ observe: 'response' });
   } 



   getStudentByNationalId(student: AddStudentDto) {
  
    //return this.http.post('https://localhost:7210/api/Student', student,{ observe: 'response' });
   } 

  EditStudentById(id : String,student: StudentDetailsDto) {
  
    return this.http.put('https://localhost:7210/api/Student/'+id,student,{ observe: 'response' });
   } 
   public delete(student : StudentDetailsDto)
   {
     //console.log('https://localhost:7210/api/Student/'+ student.studentId);
     //console.log(this.http.delete('https://localhost:7210/api/Student/'+ student.studentId))
     return this.http.delete('https://localhost:7210/api/Student/'+ student.studentId);
   }

   viewGrade (id : string )
   {
    return this.http.get<any>('https://localhost:7210/api/Student/'+ id);
   }

   EditMarks(id:number , filterValue:string , term1:String , term2:String )
   {
    return this.http.put('https://localhost:7210/api/Student/' + filterValue + "/" + id+ "/"  +term1+ "/" + term2,{ observe: 'response' });

   }
}


