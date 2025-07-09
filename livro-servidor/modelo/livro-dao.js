const Livro = require("./livro-schema");

obterLivros = async () => {
  return await Livro.find();
};

incluir = async (livro) => {
  return await Livro.create(livro);
};

excluir = async (codigo) => {
  return await Livro.deleteOne({ _id: codigo });
};

module.exports = {
  obterLivros,
  incluir,
  excluir,
};
