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
  public carregado: boolean = true;

  constructor(
    private servEditora: ControleEditora,
    private servLivros: ControleLivros
  ) {}

  ngOnInit() {
    this.editoras = this.servEditora.getEditoras();

    this.servLivros
      .obterLivros()
      .then((livros) => {
        this.livros = livros;
      })
      .catch((error) => {
        console.error('Erro ao obter livros:', error);
      });
  }

  public excluirLivro = (codigo: string) => {
    this.servLivros
      .excluirLivro(codigo)
      .then(() => {
        return this.servLivros.obterLivros();
      })
      .then((livrosAtualizados) => {
        this.livros = livrosAtualizados;
        this.setCarregado(true);
      })
      .catch((error) => {
        console.error('Erro ao excluir livro:', error);
        this.setCarregado(true);
      });
  };

  setCarregado = (valor: boolean) => {
    this.carregado = valor;
  };

  public obterNome = (codEditora: number) => {
    return this.servEditora.getNomeEditora(codEditora);
  };
}
