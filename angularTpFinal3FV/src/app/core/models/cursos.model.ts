export class Curso {
  constructor(
    public id: number,
    public titulo: string,
    public descripcion: string,
    public duracion: string,
    public tieneFinal: boolean
  ) {}
}
