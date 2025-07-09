const banco = require("./conexao");

const LivroSchema = new banco.Schema({
  _id: banco.Schema.Types.ObjectId,
  titulo: String,
  codEditora: Number,
  resumo: String,
  autores: [String],
});

const Livro = banco.model("livros", LivroSchema);

// checar  se é Livro, LivroSchema

module.exports = Livro;
