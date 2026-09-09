# 📚 Site dos Cursos — IFRN Campus Pau dos Ferros

Projeto desenvolvido para a disciplina de **Programação para Internet**, como exercício de aprendizagem de navegação entre páginas utilizando **React Router**.

O site apresenta informações sobre o **IFRN Campus Pau dos Ferros** e seus principais cursos técnicos integrados ao Ensino Médio: Informática, Alimentos e Apicultura.

---

## 🎯 Objetivo

Construir um site em React com navegação entre diferentes páginas utilizando o **React Router**, permitindo que o usuário conheça os cursos oferecidos pelo Campus Pau dos Ferros.

O projeto também possui uma página personalizada para endereços que não existem.

---

## 🛠️ Tecnologias utilizadas

- React
- Vite
- JavaScript
- React Router
- HTML
- CSS

---

## 📄 Páginas do projeto

### 🏠 Início

Apresenta informações sobre o **IFRN Campus Pau dos Ferros**, sua localização, cursos oferecidos e sua importância para o desenvolvimento da região do Alto Oeste Potiguar.

### 💻 Informática

Apresenta informações sobre o curso Técnico em Informática, incluindo suas principais áreas, como:

- Programação
- Banco de Dados
- Desenvolvimento Web
- Redes de Computadores

### 🍎 Alimentos

Apresenta informações sobre o curso Técnico em Alimentos e suas principais áreas:

- Produção de Alimentos
- Controle de Qualidade
- Segurança dos Alimentos
- Indústria Alimentícia

### 🐝 Apicultura

Apresenta informações sobre o curso Técnico em Apicultura e suas principais áreas:

- Manejo de Abelhas
- Produção de Mel
- Produtos Apícolas
- Produção Sustentável

### ❌ Página não encontrada — 404

Possui uma página personalizada para quando o usuário acessa uma URL que não existe no site.

A página é exibida através de uma rota curinga do React Router:

```jsx
<Route path="*" element={<NaoEncontrada />} />