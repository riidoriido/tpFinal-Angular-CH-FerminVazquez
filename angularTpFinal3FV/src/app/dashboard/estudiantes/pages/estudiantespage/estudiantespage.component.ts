import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { Student } from 'src/app/core/models';
import { EstudiantesdialogComponent } from '../../estudiantesdialog/estudiantesdialog.component';
import { StudentsService } from '../../students.service';

@Component({
  selector: 'app-estudiantespage',
  templateUrl: './estudiantespage.component.html',
  styleUrls: ['./estudiantespage.component.scss'],
})
export class EstudiantespageComponent implements OnDestroy {
  displayedColumns = ['id', 'firstName', 'lastName', 'email', 'delete', 'edit'];
  students: Observable<Student[]>;
  private destroyed$ = new Subject();

  constructor(
    private readonly studentsService: StudentsService,
    private readonly dialogService: MatDialog
  ) {
    this.students = this.studentsService.students$;
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }

  editarEstudiante(student: Student) {
    const dialog = this.dialogService.open(EstudiantesdialogComponent, {
      data: student,
    });
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.studentsService.editarEstudiante(student.id, data);
      }
    });
  }

  crearEstudiante() {
    const dialog = this.dialogService.open(EstudiantesdialogComponent);
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.studentsService.crearEstudiante({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
        });
      }
    });
  }

  borrarEstudiante(student: Student) {
    this.studentsService.borrarEstudiante(student.id);
  }
}
