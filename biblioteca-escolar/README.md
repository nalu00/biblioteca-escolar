# 📚 Biblioteca Escolar

Sistema web desenvolvido em React para gerenciamento de livros de uma biblioteca escolar.

O projeto permite cadastrar livros, visualizar o acervo, controlar empréstimos e consultar informações externas através de integração com API REST.

---

## 🎯 Objetivo

Desenvolver uma aplicação React utilizando:

- React Router
- Context API
- Formulários controlados
- Validação de dados
- Consumo de API REST
- Gerenciamento de estado global
- Componentização
- Responsividade

---

## 🚀 Funcionalidades

### 🏠 Página Inicial

- Dashboard com estatísticas do acervo
- Total de livros cadastrados
- Livros disponíveis
- Livros emprestados
- Quantidade de categorias
- Taxa de disponibilidade
- Exibição dos últimos livros cadastrados
- Integração com API REST

### ➕ Cadastro de Livros

Permite cadastrar novos livros informando:

- Título
- Autor
- Categoria
- ISBN
- Ano de publicação

Possui validação dos campos obrigatórios.

### 📋 Listagem de Livros

Permite:

- Visualizar todos os livros cadastrados
- Alterar status entre:
  - Disponível
  - Emprestado
- Excluir livros
- Atualização automática através da Context API

---

## 🛠 Tecnologias Utilizadas

- React
- Vite
- JavaScript
- React Router DOM
- Context API
- Axios
- CSS3
- LocalStorage

---

## 🌐 API Utilizada

Foi utilizada a API pública:

https://jsonplaceholder.typicode.com/

Objetivo:

- Demonstrar integração com API REST
- Realizar requisições HTTP utilizando Axios
- Exibir dados externos na interface

---

## 📂 Estrutura do Projeto

src
│
├── components
|   ├── BookCard.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   └── StatsCard.jsx
│
├── contexts
│   └── BookContext.jsx
│
├── pages
│   ├── Home.jsx
│   ├── Cadastro.jsx
│   └── Listagem.jsx
│
├── routes
│   └── AppRoutes.jsx
│
├── services
│   └── api.js
│
├── styles
|   ├── cadastro.css
|   ├── card.css
|   ├── footer.css
│   ├── global.css
│   ├── home.css
│   ├── listagem.css
│   └── navbar.css
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Instalação

### Clonar o repositório

```bash
git clone https://github.com/nalu00/biblioteca-escolar.git
```

### Entrar na pasta

```bash
cd biblioteca-escolar
```

### Instalar dependências

```bash
npm install
```

Caso necessário, instalar manualmente as bibliotecas utilizadas no projeto:

```bash
npm install axios react-router-dom react-hook-form
```

### Executar projeto

```bash
npm run dev
```

---

## 📸 Telas do Sistema

### Página Inicial

Dashboard com indicadores e informações do acervo.

### Cadastro

Formulário para cadastro de novos livros.

### Listagem

Consulta, alteração de status e remoção de livros.

---

## 👨‍💻 Integrantes

- Ana Luísa Sales de Oliveira
- Isabele de Souza Pereira

---

## 📚 Disciplina

Desenvolvimento Front-End com React

Projeto acadêmico desenvolvido para fins educacionais.

---

## © 2026

Biblioteca Escolar