# API de gerenciamento de vendas

## Visão geral

Esta é uma API Node.js e Express para gerenciar vendas, clientes e produtos. A API segue o padrão de arquitetura MVC e utiliza JWT para autenticação. Inclui as seguintes funcionalidades:

- Cadastro e login do usuário
- Gestão de clientes (CRUD)
- Gerenciamento de produtos (CRUD)
- Gestão de vendas (cadastramento de vendas)

## Índice

- [Tecnologias usadas](#tecnologias-usadas)
- [Instalação](#instalação)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Variáveis ​​de ambiente](#variáveis-de-ambiente)
- [Configuração do banco de dados](#database-setup)
- [Executando o aplicativo](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Middleware](#middleware)
- [Licença](#licença)

## Tecnologias usadas

-Node.js
- Expresso
- Sequelar (ORM)
- MySQL
- JWT para autenticação
- Analisador de corpo para lidar com solicitações JSON

## Instalação

### Pré-requisitos

- Node.js (v14.x ou posterior)
- MySQL

### Passos

1. Clone o repositório:
 ```bash
 git clone git@github.com:Debora1Allen/BeTalent-Projeto.git
 cd BeTalent-Projeto
 ```

2. Instale as dependências:
 ```bash
 npm install
 ```

3. Crie um arquivo `.env` no diretório raiz e adicione as variáveis ​​de ambiente necessárias (consulte a seção [Variáveis ​​de ambiente](#variáveis ​​de ambiente)).

4. Configure o banco de dados (consulte a seção [Configuração do banco de dados](#database-setup)).

## Estrutura do Projeto

```
BeTalent-Projeto/
├── src/
│   ├── config/
│   │   ├── config.json
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── customerController.js
│   │   ├── productController.js
│   │   ├── saleController.js
│   ├── middlewares/
│   │   ├── authMiddleware.js
│   ├── migrations/
│   │   ├── YYYYMMDDHHMMSS-create-user.js
│   │   ├── YYYYMMDDHHMMSS-create-customer.js
│   │   ├── YYYYMMDDHHMMSS-create-product.js
│   │   ├── YYYYMMDDHHMMSS-create-sale.js
│   ├── models/
│   │   ├── index.js
│   │   ├── user.js
│   │   ├── customer.js
│   │   ├── product.js
│   │   ├── sale.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── customerRoutes.js
│   │   ├── productRoutes.js
│   │   ├── saleRoutes.js
├── .env
├── app.js
├── package.json
└── README.md

```

## Variáveis ​​ambientais

Crie um arquivo `.env` no diretório raiz com as seguintes variáveis ​​de ambiente:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=sales_management
JWT_SECRET=yourjwtsecret
```

## Configuração do banco de dados

1. Crie o banco de dados MySQL:
 ```sql
 CREATE DATABASE sales_management;
 ```

2. Execute as migrações:
 ```bash
npx sequelize-cli db:migrate
 ```

## Executando o aplicativo

### Desenvolvimento

Para executar o aplicativo em modo de desenvolvimento:

```bash
npm run dev
```

O servidor iniciará em `http://localhost:3000`.

### Produção

Para executar o aplicativo em modo de produção:

```bash
npm start
```

## API Endpoints

### User Authentication

- **POST /signup**
  - Request body: `{ "email": "user@example.com", "password": "password" }`
  - Response: `201 Created`

- **POST /login**
  - Request body: `{ "email": "user@example.com", "password": "password" }`
  - Response: `{ "token": "jwt_token" }`

### Customers

- **GET /customers**
  - Response: `200 OK` - Lista todos os clientes (classificados por ID)

- **GET /customers/:id**
  - Response: `200 OK` - Mostra detalhes de um cliente e suas vendas

- **POST /customers**
  - Request body: `{ "name": "John Doe", "cpf": "12345678900", "address": {...}, "telephones": [...] }`
  - Response: `201 Created`

- **PUT /customers/:id**
  - Request body: `{ "name": "John Doe", "cpf": "12345678900", "address": {...}, "telephones": [...] }`
  - Response: `200 OK`

- **DELETE /customers/:id**
  - Response: `204 No Content`

### Products

- **GET /products**
  - Response: `200 OK` - Lista todos os produtos (classificados em ordem alfabética)

- **GET /products/:id**
  - Response: `200 OK` - Mostra detalhes de um produto

- **POST /products**
  - Request body: `{ "name": "Product A", "description": "Description", "price": 100.0 }`
  - Response: `201 Created`

- **PUT /products/:id**
  - Request body: `{ "name": "Product A", "description": "Description", "price": 100.0 }`
  - Response: `200 OK`

- **DELETE /products/:id**
  - Response: `204 No Content` - Exclusão lógica (soft delete)

### Sales

- **POST /sales**
  - Request body: `{ "customerId": 1, "productId": 1, "quantity": 2 }`
  - Response: `201 Created`

##Middleware

### Middleware de autenticação

- `authMiddleware.js`
 - Protege rotas para garantir que apenas usuários logados possam acessar determinados endpoints.

## Licença

Este projeto está licenciado sob a licença MIT.

---