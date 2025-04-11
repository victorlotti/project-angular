# 🛍️ Project Angular – Loja de Produtos

[![Build](https://img.shields.io/badge/build-passing-brightgreen?style=flat-square)](https://github.com/victorlotti/project-angular-backend)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Angular](https://img.shields.io/badge/Angular-13-red?logo=angular&logoColor=white&style=flat-square)](https://angular.io/)
[![Hosted on GitHub Pages](https://img.shields.io/badge/frontend-GitHub%20Pages-blue?style=flat-square&logo=github)](https://seu-link-do-github-pages)
[![Backend on Render](https://img.shields.io/badge/backend-Render-%23704DD5?style=flat-square&logo=render)]

---

## 🧾 Sobre o Projeto

Projeto Angular com foco em **cadastro e gerenciamento de produtos**, utilizando uma estrutura de componentes, boas práticas de UI e comunicação com backend simulado via JSON Server.

---

## 🔗 Acesse Agora

🌐 [**Visualizar Projeto Online**](https://victorlotti.github.io/project-angular/)  
📡 [**API Fake (Render)**](https://project-angular-backend.onrender.com/products)

> 💡 *Observação: O backend está hospedado gratuitamente e pode levar alguns segundos para acordar.*

---

## ⚙️ Funcionalidades

- ✅ Listagem de produtos
- ➕ Cadastro com validação
- ✏️ Edição de produtos
- 🗑️ Exclusão com feedback
- 🧠 Snackbar de status
---

## 🧰 Tecnologias

- `Angular 13+`
- `Angular Material`
- `TypeScript`
- `JSON Server`
- `Render`
- `GitHub Pages`

---

## 🚀 Como Executar Localmente

```bash
# Clone o repositório
git clone https://github.com/victorlotti/project-angular-backend.git
cd project-angular-backend

# Instale as dependências
npm install

# Rode o backend fake
npx json-server --watch db.json --port 3001

# Rode o Angular
ng serve
