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
    this.livro.autores = this.autoresForm.split('\n');
    this.servLivros.incluirLivro(this.livro);
    this.router.navigateByUrl('/lista');
  };

  cancelar = () => {
    this.router.navigateByUrl('/lista');
  };
}
