const express = require("express");
const { obterLivros, incluir, excluir } = require("../modelo/livro-dao");
router = express.Router();

router.get("/", async (req, res) => {
  const livros = await obterLivros();
  res.json(livros);
});

router.post("/", async (req, res) => {
  const livro = req.body;
  await incluir(livro)
    .then(() => {
      res.json({ mensagem: "Livro adicionado com sucesso" });
    })
    .catch(() => {
      res.json({ mensagem: "Erro ao adicionar livro" });
    });
});

router.delete("/:_id", async (req, res) => {
  const _id = req.params._id;
  await excluir(_id)
    .then(() => {
      res.json({ mensagem: "Livro deletado com sucesso" });
    })
    .catch(() => {
      res.json({ mensagem: "Erro ao deletar livro" });
    });
});

module.exports = router;
