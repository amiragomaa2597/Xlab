export class  AddStudentDto {
    studentName: string ;
    nationalId: string;
    currentAcademicYear: string;

    constructor(studentName: string,  nationalId: string,  currentAcademicYear: string) {
        this.studentName = studentName;
        this.nationalId =nationalId;
        this.currentAcademicYear = currentAcademicYear;
       }
  }
  
  