import { Injectable } from '@angular/core';
import { Editora } from './Editora';

const editoras: Editora[] = [
  { codEditora: 1, nome: 'IntBooksLDTA' },
  { codEditora: 2, nome: 'AutoritareBooks' },
  { codEditora: 3, nome: 'NewBooksLDTA' },
];

@Injectable({
  providedIn: 'root',
})
export class ControleEditora {
  editoras: Editora[] = [
    { codEditora: 1, nome: 'IntBooksLDTA' },
    { codEditora: 2, nome: 'AutoritarianBooks' },
    { codEditora: 3, nome: 'NewBooksLDTA' },
  ];

  constructor() {}
  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.find(
      (editora) => editora.codEditora === codEditora
    );
    return editora ? editora.nome : 'Editora não encontrada';
  }
  getEditoras(): Editora[] {
    return this.editoras;
  }
}
