import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Curso } from 'src/app/core/models/cursos.model';

@Component({
  selector: 'app-curso-card',
  templateUrl: './curso-card.component.html',
  styleUrls: ['./curso-card.component.scss'],
})
export class CursoCardComponent implements OnInit {
  @Input() curso: Curso;
  @Output() eliminar = new EventEmitter<Curso>();

  constructor() {}

  ngOnInit(): void {}

  eliminarCurso() {
    this.eliminar.emit(this.curso);
  }
}
