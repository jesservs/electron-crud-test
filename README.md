# Electron CRUD App

Este é um aplicativo desktop simples desenvolvido com **Electron** que realiza operações CRUD (Criar, Ler, Atualizar e Deletar) e se comunica com uma API **RESTful** desenvolvida em **Laravel**. O projeto é apenas um app de teste com fins didáticos.

## Funcionalidades

- **Criar**: Adiciona novos itens via a API.
- **Ler**: Exibe a lista de itens armazenados na API.
- **Atualizar**: Permite editar itens existentes.
- **Deletar**: Remove itens da API.

## Tecnologias Utilizadas

- **Electron**: Para criar a interface desktop.
- **Laravel** (API): Para criar a API RESTful backend.
- **Node.js**: Ambiente de execução do JavaScript no backend.
- **Axios**: Para realizar as requisições HTTP para a API Laravel.

## Pré-requisitos

- **Node.js** instalado.
- API **Laravel** em execução e acessível.

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/usuario/nome-do-repositorio.git
   cd electron-crud-app
   ```

2. Instale as dependências do projeto:

   ```bash
   npm install
   ```

3. Certifique-se de que a API Laravel esteja rodando e que o **endpoint** esteja correto no arquivo de configuração do Electron (caso haja).

## Configuração da API

Certifique-se de que a URL da API Laravel está corretamente configurada no código do projeto Electron. Por padrão, o app utiliza o `Axios` para fazer as requisições HTTP. Caso a URL da API seja diferente, atualize o arquivo correspondente no app Electron (ex: `src/api.js`).

Exemplo de configuração:

```javascript
const api = axios.create({
    baseURL: 'http://localhost:8000/api' // URL da API Laravel
});
```

## Como Usar

1. Inicie o aplicativo Electron:

   ```bash
   npm start
   ```

2. O aplicativo abrirá uma interface gráfica onde você poderá realizar as operações CRUD:
   - **Criar** novos itens.
   - **Visualizar** todos os itens disponíveis.
   - **Editar** itens existentes.
   - **Deletar** itens.

## Estrutura de Pastas

```plaintext
electron-crud-app/
├── node_modules/        # Dependências do Node.js
├── src/                 # Código-fonte principal do app Electron
│   ├── main.js          # Arquivo principal que inicia o Electron
│   ├── api.js           # Configuração das chamadas à API RESTful
│   ├── components/      # Componentes do frontend
├── .gitignore           # Arquivos/pastas ignorados pelo Git
├── package.json         # Dependências e scripts do projeto
└── README.md            # Documentação do projeto
```

## Contribuindo

Contribuições são bem-vindas! Se você deseja adicionar novas funcionalidades, corrigir bugs ou melhorar o código, fique à vontade para abrir uma **issue** ou enviar um **pull request**.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
