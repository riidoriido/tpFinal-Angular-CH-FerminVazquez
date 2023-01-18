import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, take } from 'rxjs';
import { Student } from 'src/app/core/models';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private students = new BehaviorSubject<Student[]>([
    new Student(1, 'Fermin', 'Vazquez', 'fv.shutter@gmail.com'),
    new Student(2, 'Jorge', 'Gutierrez', 'gutierrez.soluciones@hotmail.com'),
    new Student(3, 'Martina', 'Diaz', 'marti.d99@live.com.ar'),
    new Student(4, 'Carmen S.', 'Olivos', 'csolivos_1993@yahoo.com'),
    new Student(5, 'Julián', 'Domingues', 'juli.capo.edlp@gmail.com'),
    new Student(6, 'Nicolás', 'Paredes', 'endless.cc@gmail.com'),
  ]);
  public students$: Observable<Student[]>;
  constructor() {
    this.students$ = this.students.asObservable();
  }

  crearEstudiante(newStudentData: Omit<Student, 'id' | 'active'>): void {
    this.students.pipe(take(1)).subscribe((students) => {
      const lastId = students[students.length - 1]?.id || 0;
      this.students.next([
        ...students,
        new Student(
          lastId + 1,
          newStudentData.firstName,
          newStudentData.lastName,
          newStudentData.email
        ),
      ]);
    });
  }

  editarEstudiante(id: number, data: Partial<Student>): void {
    this.students.pipe(take(1)).subscribe((students) => {
      this.students.next(
        students.map((stu) =>
          stu.id === id
            ? new Student(
                stu.id,
                data.firstName || stu.firstName,
                data.lastName || stu.lastName,
                data.email || stu.email
              )
            : stu
        )
      );
    });
  }

  borrarEstudiante(id: number): void {
    this.students.pipe(take(1)).subscribe((students) => {
      this.students.next(students.filter((stu) => stu.id !== id));
    });
  }

  getStudentById(id: number): Observable<Student | null> {
    return this.students$.pipe(
      take(1),
      map((students) => students.find((stu) => stu.id === id) || null)
    );
  }
}
