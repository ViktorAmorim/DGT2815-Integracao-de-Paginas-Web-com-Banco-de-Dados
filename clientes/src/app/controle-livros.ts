import { Injectable } from '@angular/core';
import { Livro } from './Livro';

export const baseURL = 'http://localhost:3030/livros';

interface LivroMongo {
  _id: string | null;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ControleLivros {
  obterLivros = async (livro: Livro): Promise<LivroMongo[]> => {
    try {
      const resposta = await fetch(`${baseURL}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const dados = await resposta.json();
      const livros = dados.map((livro: any) => ({
        _id: livro._id,
        codEditora: livro.codEditora,
        titulo: livro.titulo,
        resumo: livro.resumo,
        autores: livro.autores,
      }));

      return livros;
    } catch (error) {
      console.log('Erro ao obter livros:', error);
      throw error;
    }
  };
  excluirLivro = async (codigo: String): Promise<boolean> => {
    try {
      const resposta = await fetch(`${baseURL}/${codigo}`, {
        method: 'DELETE',
      });
      return resposta.ok;
    } catch (error) {
      console.log('Erro ao deletar livro:', error);
      throw error;
    }
  };

  incluirLivro = async (livro: Livro): Promise<boolean> => {
    {
      const livroMongo: LivroMongo = {
        _id: livro.codigo ? livro.codigo.toString() : null,
        codEditora: livro.codEditora,
        titulo: livro.titulo,
        resumo: livro.resumo,
        autores: livro.autores,
      };
      try {
        const resposta = await fetch(`${baseURL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        return resposta.ok;
      } catch (error) {
        console.log('Erro ao inserir livro:', error);
        throw error;
      }
    }
  };

  constructor() {}
}
