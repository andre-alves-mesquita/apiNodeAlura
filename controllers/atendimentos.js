const atendimentos = require("../models/atendimentos");

module.exports = (app) => {
  app.get("/atendimentos", (req, res) => Atendimento.lista(res));

  app.get("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    atendimentos.buscaPorId(id, res);
  });

  app.post("/atendimentos", (req, res) => {
    const atendimento = req.query;
    Atendimento.adiciona(atendimento, res);
  });

  app.patch("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const valores = req.query;

    atendimentos.alterar(id, valores, res);
  });

  app.delete("/atendimento/:id", (req, res) => {
    const id = parseInt(req.params.id);

    atendimentos.deleta(id, res);
  });
};
