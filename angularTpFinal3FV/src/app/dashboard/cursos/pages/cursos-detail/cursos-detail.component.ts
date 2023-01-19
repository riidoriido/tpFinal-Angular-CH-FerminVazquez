import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Curso } from 'src/app/core/models/cursos.model';
import { CursosService } from '../../cursos.service';

@Component({
  selector: 'app-cursos-detail',
  templateUrl: './cursos-detail.component.html',
  styleUrls: ['./cursos-detail.component.scss'],
})
export class CursosDetailComponent implements OnInit, OnDestroy {
  public curso: Curso | null = null;
  private destroyed$ = new Subject();
  constructor(
    private readonly cursosService: CursosService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }
  ngOnInit(): void {
    this.cursosService
      .getCursoById(
        parseInt(this.activatedRoute.snapshot.params['cursoId'] || 0)
      )
      .pipe(takeUntil(this.destroyed$))
      .subscribe((result) => (this.curso = result));
  }
}
