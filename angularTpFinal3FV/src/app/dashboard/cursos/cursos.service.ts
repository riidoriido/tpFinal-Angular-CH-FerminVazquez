import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, take } from 'rxjs';
import { Curso } from 'src/app/core/models/cursos.model';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private cursos = new BehaviorSubject<Curso[]>([
    new Curso(
      1,
      'HTML/CSS',
      'Curso inicial de creación y diseño de paginas web.',
      '3 meses',
      true
    ),
    new Curso(
      2,
      'JavaScript',
      'Fundamentos de JS. Aprenderás todo lo necesario para agragarle funcionalidad a tus paginas.',
      '3 meses',
      true
    ),
    new Curso(
      3,
      'BackEnd Inicial',
      'Aprendé lo basico para adentrarte en el mundo de los servidores y bases de datos.',
      '5 meses',
      false
    ),
    new Curso(
      4,
      'UX/UI',
      'Fundamentos de User Experience y User Interface.',
      '2 meses',
      false
    ),
  ]);
  public cursos$: Observable<Curso[]>;
  constructor() {
    this.cursos$ = this.cursos.asObservable();
  }

  agregarCurso(curso: Curso) {
    let nuevaLista = this.cursos.getValue();
    nuevaLista.push(curso);
    this.cursos.next(nuevaLista);
  }

  eliminarCurso(curso: Curso) {
    let nuevaLista = this.cursos
      .getValue()
      .filter((p) => p.titulo !== curso.titulo);
    this.cursos.next(nuevaLista);
  }

  // borrarCurso(id: number): void {
  //   this.cursos.pipe(take(1)).subscribe((cursos) => {
  //     this.cursos.next(cursos.filter((curs) => curs.id !== id));
  //   });
  // }

  getCursoById(id: number): Observable<Curso | null> {
    return this.cursos$.pipe(
      take(1),
      map((cursos) => cursos.find((curs) => curs.id === id) || null)
    );
  }
}
