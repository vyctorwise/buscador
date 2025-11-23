# Monitoramento da Pobreza (2023–2024)

Este repositório contém um script em JavaScript (Node.js) desenvolvido para consultar dados públicos de pobreza através da API do Banco Mundial (World Bank).  
O objetivo é obter indicadores atualizados referentes aos anos **2023 e 2024**, permitindo análises sobre a evolução e o crescimento da pobreza nesse período.

---

## 📌 Objetivo do Projeto

Criar uma solução simples, automatizada e reprodutível que busque dados reais de pobreza em APIs públicas e disponibilize esses valores no console. Esse código faz parte de um projeto acadêmico relacionado ao tema **Erradicação da Pobreza**.

---

## 📂 Arquivos do Repositório

- **poverty-data.js** → Script principal que busca indicadores de pobreza
- **package.json** → Dependências do projeto
- **README.md** → Este documento

---

## 🔧 Tecnologias Utilizadas

- Node.js  
- fetch (via `node-fetch`)  
- API do Banco Mundial  
- JavaScript ES6  

---

## 🌍 Fonte dos Dados

Os dados são obtidos diretamente da API oficial do World Bank:

- Indicador de Pobreza Multidimensional: `SI.POV.MPWB`
- Indicador de Linha de Pobreza Societal: `SI.POV.SOPO`
- País utilizado no exemplo: **WLD** (dados globais)

---

## 🧪 Como Executar o Projeto

1. **Instale as dependências**
   ```bash
   npm install
