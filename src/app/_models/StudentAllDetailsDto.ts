export class  StudentDetailsDto {
    studentId: number | undefined;
    nationalId:String | undefined;
    studentName: string | undefined;
    currentAcademicYear: string | undefined;
    totalGrades: TotalGrade[] | undefined;
    studentSubjects: StudentSubject[] | undefined;
    term1Arabic: number | undefined;
    term2Arabic:  number | undefined;
    term1Science:  number | undefined;
    term2Science: number | undefined;
    totalScience:  number | undefined;
    totalArabic: number | undefined;
    totalterm1:number|undefined;
    totalterm2:number|undefined;
    total: number | undefined;
  }
  
  export class StudentSubject {
    id: number | undefined;
    studentId: number | undefined;
    subjectId: number | undefined;
    marksOfThisSubject: number | undefined;
    gradeState: string | undefined;
    term: number | undefined;
    student: string | undefined;
    subject: Subject | undefined;
  }
  
  export class Subject {
    subjectId: number | undefined;
    subjectName: string | undefined;
  }
  
  export class TotalGrade {
    gradeId: number | undefined;
    studentId: number | undefined;
    academicYear: string | undefined;
    year: string | undefined;
    term1Grade: number | undefined;
    term2Grade: number | undefined;
    totalGrade: number | undefined;
    student: string | undefined;
  }
  
  