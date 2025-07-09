const banco = require("mongoose");

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

banco.connect("mongodb://localhost/livraria", options);

module.exports = banco;
