import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HeaderComponent} from './header/header.component';
import{FooterComponent}from './footer/footer.component';
import { DetailsComponent } from './Pages/Students/details/details.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EditStudentComponent } from './Pages/Students/edit-student/edit-student.component';
import { AddStudentComponent } from './Pages/Students/add-student/add-student.component';
import { GradingFilteredBySubjectComponent } from './Pages/Subjects/grading-filtered-by-subject/grading-filtered-by-subject.component';
import { AddSubjectSMarksComponent } from './Pages/Subjects/add-subject-smarks/add-subject-smarks.component';
import { DeleteConfirmationComponent } from './Pages/Students/delete-confirmation/delete-confirmation.component';
import { DeleteService } from './Services/Students/delete.service';
import{ StudentService } from './Services/Students/Student.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {  HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DetailsComponent,
    EditStudentComponent,
    AddStudentComponent,
    GradingFilteredBySubjectComponent,
    AddSubjectSMarksComponent,
    DeleteConfirmationComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  bootstrap:    [ AppComponent ],
  providers: [DeleteService,StudentService,],
 
})
export class AppModule { }