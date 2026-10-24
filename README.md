# Desafio TWR - Receptor de Postbacks

## Sobre o projeto

Este projeto foi desenvolvido para o desafio técnico da vaga de Estágio em Desenvolvimento Back-end da The White Rabbit.

A aplicação recebe notificações de vendas por meio de requisições HTTP e permite consultar as vendas recebidas.

## Tecnologias utilizadas

- TypeScript
- Node.js
- Express

## Como executar o projeto

É necessário ter o Node.js instalado.

Primeiro, instale as dependências:

```bash
npm install
```

Depois, inicie o servidor:

```bash
npm start
```

Por padrão, o servidor utiliza a porta 3000, caso nenhuma porta seja definida pelo ambiente.

## Como usar

### 1. Cadastrar uma venda

Envie uma requisição `POST` para `/postbacks`, com os dados da venda em formato JSON.

Exemplo de dados:

```json
{
  "id": "venda-001",
  "produto": "Curso de programação",
  "valor": 199.9,
  "status": "aprovada"
}
```

Exemplo usando cURL:

```bash
curl -X POST http://localhost:3000/postbacks \
  -H "Content-Type: application/json" \
  -d '{"id":"venda-001","produto":"Curso de programação","valor":199.9,"status":"aprovada"}'
```

Quando a venda é recebida corretamente, a aplicação retorna uma mensagem de sucesso.

### 2. Consultar as vendas

Envie uma requisição `GET` para `/relatorio`.

Exemplo usando cURL:

```bash
curl http://localhost:3000/relatorio
```

A aplicação retorna a lista de vendas cadastradas.

## Validações

A aplicação verifica os tipos básicos dos campos recebidos e rejeita vendas que tenham um ID já cadastrado.

As principais respostas são:

- `201 Created`: venda recebida com sucesso.
- `400 Bad Request`: dados da venda inválidos.
- `409 Conflict`: venda com ID já cadastrado.

## Decisões e limitações

Optei por armazenar as vendas em um array na memória para manter a implementação simples, sem precisar configurar um banco de dados.

Cada venda possui um ID, um produto, um valor e um status. O ID é utilizado para impedir que a mesma venda seja cadastrada mais de uma vez durante a execução do servidor.

Por enquanto, os dados não ficam salvos permanentemente. Se o servidor for reiniciado, as vendas armazenadas serão perdidas.

Também não implementei autenticação, verificação de assinatura dos webhooks, filtros ou cálculo do total vendido. A validação dos dados é básica e ainda pode ser melhorada.

## Autor

Projeto desenvolvido como parte do desafio técnico da The White Rabbit.