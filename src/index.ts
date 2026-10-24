import express = require("express");

const app = express();

app.use(express.json());

type Venda = {
  id: string;
  produto: string;
  valor: number;
  status: string;
};

const vendas: Venda[] = [];

app.post("/postbacks", (req, res) => {

 const dados = req.body;

if (
  typeof dados.id !== "string" ||
  typeof dados.produto !== "string" ||
  typeof dados.valor !== "number" ||
  typeof dados.status !== "string"
) {
  return res.status(400).json({
    mensagem: "Dados da venda inválidos"
  });
}

const venda: Venda = dados;

if (vendas.some(item => item.id === venda.id)) {
  return res.status(409).json({
    mensagem: "Essa venda já foi cadastrada"
  });
}

vendas.push(venda);

  res.status(201).json({
    mensagem: "Venda recebida com sucesso",
    venda: venda
  });
})

app.get("/relatorio", (req, res) => {
  res.json(vendas);
});



app.get("/", (req, res) => {
  res.send("Receptor de postbacks TWR funcionando!");
});

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});