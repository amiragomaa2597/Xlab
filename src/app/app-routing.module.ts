import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{DetailsComponent}from './Pages/Students/details/details.component';
import{ViewGradesComponent}from './Pages/Students/view-grades/view-grades.component';
import { EditStudentComponent } from './Pages/Students/edit-student/edit-student.component';
import { AddStudentComponent } from './Pages/Students/add-student/add-student.component';
import { GradingFilteredBySubjectComponent } from './Pages/Subjects/grading-filtered-by-subject/grading-filtered-by-subject.component';
import { AddSubjectSMarksComponent } from './Pages/Subjects/add-subject-smarks/add-subject-smarks.component';
const routes: Routes = [
  { path: '', redirectTo: 'StudentDetails', pathMatch: 'full' },
  { path: 'StudentDetails', component: DetailsComponent },
  { path: 'viewgrades/:id', component: ViewGradesComponent },
  { path: 'EditStudent/:id', component: EditStudentComponent },
  { path: 'AddStudent', component: AddStudentComponent },
  { path: 'Subjects', component: GradingFilteredBySubjectComponent},
  { path: 'EditMarks/:filterValue/:id/:name/:academicYear', component: AddSubjectSMarksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
