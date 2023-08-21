import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteConfirmationComponent } from 'src/app/Pages/Students/delete-confirmation/delete-confirmation.component';
import { HttpClient } from '@angular/common/http';
import { StudentDetailsDto } from 'src/app/_models/StudentAllDetailsDto';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private modalService: NgbModal, private http: HttpClient) { }

  public confirm(
    title: string,
    message: string,
    btnOkText: string = 'OK',
    btnCancelText: string = 'Cancel',
    dialogSize: 'sm' | 'lg' = 'sm'): Promise<boolean> {
    const modalRef = this.modalService.open(DeleteConfirmationComponent, { size: dialogSize });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText;

    return modalRef.result;
  }

  public delete(student: StudentDetailsDto): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.http.delete(`https://localhost:7210/api/Student/${student.studentId}`)
        .toPromise()
        .then(() => resolve(true))
        .catch(() => resolve(false));
    });
  }
}