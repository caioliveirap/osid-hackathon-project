# OSID Hackathon Project - Equipe 50%

<h4 align="center"> 
	🚧 Dulce Insights 🚧
</h4>

<p align="center">
	<img alt="Status Em Desenvolvimento" src="https://img.shields.io/badge/STATUS-EM%20DESENVOLVIMENTO-green">
	<!-- <img alt="Status Concluído" src="https://img.shields.io/badge/STATUS-CONCLU%C3%8DDO-brightgreen"> -->
</p>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
</p>

## 💻 Sobre o projeto

📄 Dulce insights é a plataforma de BI voltada aos dados de doações das obras sociais irmã dulce

## Projeto desenvolvido durante o **[Hackathon da OSID]**.

## ⚙️ Funcionalidades

- [x] Fluxo de doação:

  - [x] Acesse `/auth/register`
  - [x] Prencha o formulário
  - [x] Redirecionado para `/doar`
  - [x] Fluxo de doação
    - Quantidade
    - Tela de pagamento
    - Tela de sucesso

- [x] Dashboard:
  - [x] Acesse `/auth/login`
  - [x] Clique em entrar
  - [x] Doações: `/admin/doacoes`
  - [x] Campanhas: `/admin/campanhas`
  - [x] Lista de doadores: `/admin/doadores`
  - [x] Lista de doacoes: `/admin/doacoes`

---

## 🎨 Layout

O layout da aplicação está disponível no Figma:

<a href="https://www.figma.com/file/SP2BbR9KTIhgxn5fusQvGm/Hackathon-OSID-2023?type=design&node-id=1-2&t=LVUkgjdLFywRxsDo-0">
  <img alt="Made by Equipe 50%" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>

---

## 🛣️ Como executar o projeto

Este projeto é divido em duas partes:

1. Backend (pasta server)
2. Frontend (pasta web)

💡O Frontend precisa que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone git@github.com:caioliveirap/osid-hackathon-project.git

# Acesse a pasta do projeto no terminal/cmd
$ cd osid-hackathon-project

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website** ([Nextjs](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/))

- **[NextJS](https://nextjs.org/)**
- **[Axios](https://github.com/axios/axios)**
