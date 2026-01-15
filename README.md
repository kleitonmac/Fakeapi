# 🛍️ Projeto de Consumo de API - Fake Store

Uma aplicação web moderna desenvolvida em React que consome a API Fake Store para exibir produtos de uma loja virtual com funcionalidades de busca e filtragem por categoria.

## 🌐 Acesso

**Aplicação hospedada:** [https://cosumoapi.vercel.app/](https://cosumoapi.vercel.app/)

## 📋 Sobre o Projeto

Este projeto é uma Single Page Application (SPA) que demonstra o consumo de uma API REST externa. A aplicação busca produtos da [Fake Store API](https://fakestoreapi.com/) e os exibe em uma interface amigável com recursos de busca e filtragem.

### Funcionalidades

- ✅ **Listagem de Produtos**: Exibe todos os produtos disponíveis na API em formato de cards
- ✅ **Busca por Título**: Permite buscar produtos digitando parte do nome/título
- ✅ **Filtro por Categoria**: Filtra produtos por categoria (eletrônicos, joias, roupas, etc.)
- ✅ **Interface Responsiva**: Layout adaptável para diferentes tamanhos de tela
- ✅ **Tratamento de Erros**: Tratamento adequado quando a API não responde

## 🛠️ Tecnologias Utilizadas

- **React 19.2.0** - Biblioteca JavaScript para construção de interfaces
- **Vite 7.2.4** - Build tool e servidor de desenvolvimento
- **ESLint** - Ferramenta de linting para manter qualidade do código
- **CSS Modules** - Estilização modular dos componentes

## 📁 Estrutura do Projeto

```
Api/
├── src/
│   ├── components/
│   │   ├── CardProduto/          # Componente de card de produto
│   │   │   ├── CardProduto.jsx
│   │   │   └── CarProduto.css
│   │   ├── Filtros/              # Componente de filtros e busca
│   │   │   ├── Filtro.jsx
│   │   │   └── Filtro.css
│   │   ├── Header/               # Cabeçalho da aplicação
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── Footer/               # Rodapé da aplicação
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   └── ListaProdutos/        # Componente de listagem
│   │       ├── ListaProduto.jsx
│   │       └── ListaProduto.css
│   ├── pages/
│   │   ├── Home.jsx              # Página principal
│   │   └── Home.css
│   ├── styles/
│   │   ├── global.css            # Estilos globais
│   │   └── container.css         # Estilos de container
│   ├── App.jsx                   # Componente raiz
│   └── main.jsx                  # Ponto de entrada da aplicação
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## 🚀 Como Executar Localmente

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd Api
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse a aplicação no navegador:
```
http://localhost:5173
```

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Visualiza a build de produção localmente
- `npm run lint` - Executa o linter para verificar o código

## 🔌 API Utilizada

O projeto consome a **Fake Store API**, uma API REST gratuita que simula uma loja de e-commerce:

- **Endpoint**: `https://fakestoreapi.com/products`
- **Documentação**: [https://fakestoreapi.com/](https://fakestoreapi.com/)

### Dados Retornados

Cada produto contém:
- `id`: Identificador único
- `title`: Título do produto
- `price`: Preço
- `description`: Descrição
- `category`: Categoria
- `image`: URL da imagem
- `rating`: Avaliação (rate e count)

## 🎨 Componentes Principais

### Home.jsx
Componente principal que gerencia o estado da aplicação:
- Gerencia a lista de produtos
- Controla os filtros de busca e categoria
- Faz a requisição à API na montagem do componente

### Filtros
Componente que renderiza:
- Campo de busca por texto
- Select para filtrar por categoria

### ListaProdutos
Componente que renderiza a lista de produtos filtrados ou exibe mensagem quando não há resultados.

### CardProduto
Componente que exibe as informações de cada produto:
- Imagem
- Título
- Preço formatado
- Categoria
- Botão "Adicionar ao carrinho" (desabilitado)

## 🌐 Hospedagem

A aplicação está hospedada na **Vercel**, uma plataforma de hospedagem moderna para aplicações front-end.

### Deploy

O deploy é feito automaticamente através da Vercel quando há push para o repositório principal, ou pode ser feito manualmente através do CLI da Vercel:

```bash
npm i -g vercel
vercel
```

### URL de Produção

🔗 **https://cosumoapi.vercel.app/**

## 📝 Observações

- O botão "Adicionar ao carrinho" está desabilitado, pois a funcionalidade de carrinho não foi implementada
- A aplicação trata erros de requisição, exibindo uma lista vazia caso a API não responda
- Os filtros funcionam de forma combinada (busca + categoria)

## 👨‍💻 Desenvolvimento

Este projeto foi desenvolvido como uma demonstração de consumo de API REST com React, utilizando hooks modernos como `useState` e `useEffect` para gerenciamento de estado e efeitos colaterais.

## 📄 Licença

Este projeto é de código aberto e está disponível para fins educacionais.

---

**Desenvolvido com ❤️ usando React e Vite**
