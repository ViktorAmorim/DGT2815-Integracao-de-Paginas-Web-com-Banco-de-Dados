import { Component } from '@angular/core';
import { Livro } from '../Livro';
import { Editora } from '../Editora';

import { ControleEditora } from '../controle-editora';
import { ControleLivros } from '../controle-livros';

import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-livro-dados',
  imports: [FormsModule, CommonModule],
  templateUrl: './livro-dados.html',
  styleUrl: './livro-dados.css',
  standalone: true,
})
export class LivroDados {
  public livro: Livro;
  public autoresForm: string = '';
  public editoras: Editora[] = [];

  constructor(
    private servEditora: ControleEditora,
    private servLivros: ControleLivros,
    private router: Router
  ) {
    this.livro = new Livro();
  }

  ngOnInit() {
    this.editoras = this.servEditora.getEditoras();
  }
  public incluir = () => {
    const novoLivro = new Livro();
    novoLivro.codigo = '';

    this.livro.autores = this.autoresForm
      .split('\n')
      .map((autor) => autor.trim())
      .filter(Boolean); // remove espaços em branco caso o usurio tenha digitado um espaço no final da linha

    this.servLivros.incluirLivro(this.livro).then(() => {
      this.router.navigateByUrl('/lista');
    });
  };

  cancelar = () => {
    this.router.navigateByUrl('/lista');
  };
}
