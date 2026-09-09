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

<img width="1533" height="820" alt="inicio" src="https://github.com/user-attachments/assets/af8c0875-123a-4f0b-af02-c35c78a38ee9" />
Apresenta informações sobre o **IFRN Campus Pau dos Ferros**, sua localização, cursos oferecidos e sua importância para o desenvolvimento da região do Alto Oeste Potiguar.

### 💻 Informática

<img width="1535" height="818" alt="informatica" src="https://github.com/user-attachments/assets/bc8ccbd8-093e-402c-95ca-cdc6be6a9b70" />
Apresenta informações sobre o curso Técnico em Informática, incluindo suas principais áreas, como:

- Programação
- Banco de Dados
- Desenvolvimento Web
- Redes de Computadores

### 🍎 Alimentos

<img width="1535" height="818" alt="alimentos" src="https://github.com/user-attachments/assets/a5c9b67e-9147-4c07-a289-04278759c245" />
Apresenta informações sobre o curso Técnico em Alimentos e suas principais áreas:

- Produção de Alimentos
- Controle de Qualidade
- Segurança dos Alimentos
- Indústria Alimentícia

### 🐝 Apicultura

<img width="1535" height="819" alt="apicultura" src="https://github.com/user-attachments/assets/3002b66d-d982-435d-b0f1-c3544ef3386c" />
Apresenta informações sobre o curso Técnico em Apicultura e suas principais áreas:

- Manejo de Abelhas
- Produção de Mel
- Produtos Apícolas
- Produção Sustentável

### ❌ Página não encontrada — 404

Possui uma página personalizada para quando o usuário acessa uma URL que não existe no site.

A página é exibida através de uma rota curinga do React Router:
<img width="1535" height="818" alt="notfound" src="https://github.com/user-attachments/assets/9f3533ed-a8d2-47af-83bd-91af83af6647" />
```jsx
<Route path="*" element={<NaoEncontrada />} />
