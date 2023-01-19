import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Curso } from 'src/app/core/models/cursos.model';
import { CursosService } from '../../cursos.service';

@Component({
  selector: 'app-cursos-pages',
  templateUrl: './cursos-pages.component.html',
  styleUrls: ['./cursos-pages.component.scss'],
})
export class CursosPagesComponent implements OnInit {
  public cursos$: Observable<Curso[]>;

  constructor(private cursosService: CursosService) {}

  ngOnInit(): void {
    this.cursos$ = this.cursosService.cursos$;
  }

  clickEliminar(curso: Curso) {
    this.cursosService.eliminarCurso(curso);
  }

  agregarCurso() {
    this.cursosService.agregarCurso({
      id: 5,
      titulo: 'WordPress',
      descripcion:
        'Con este curso vas a entender rápidamente todos los secretos y fundamentos de la popular plataforma WordPress.',
      duracion: '1 mes',
      tieneFinal: false,
    });
  }
}
