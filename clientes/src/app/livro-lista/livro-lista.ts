import { Component } from '@angular/core';
import { Editora } from '../Editora';
import { Livro } from '../Livro';
import { ControleEditora } from '../controle-editora';
import { ControleLivros } from '../controle-livros';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livro-lista',
  imports: [CommonModule],
  templateUrl: './livro-lista.html',
  styleUrl: './livro-lista.css',
  standalone: true,
})
export class LivroLista {
  public editoras: Editora[] = [];
  public livros: Livro[] = [];

  constructor(
    private servEditora: ControleEditora,
    private servLivros: ControleLivros
  ) {}

  ngOnInit() {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
  }

  public excluirLivro = (codigo: number) => {
    this.servLivros.excluirLivro(codigo);
    this.livros = this.servLivros.obterLivros();
  };

  public obterNome = (codEditora: number) => {
    return this.servEditora.getNomeEditora(codEditora);
  };
}
