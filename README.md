# Vue 3 Learning Game - Quiz Editor

Este projeto é um editor de quiz simples construído com Vue.js. Permite aos utilizadores criar, editar e gerir perguntas de quiz. Além disso, inclui um gerador de perguntas com assistência de IA que usa a API Groq para gerar perguntas de quiz com base em prompts fornecidos pelo utilizador.

## Funcionalidades

- Adicionar, editar e excluir perguntas de quiz
- Gerir categorias de quiz e níveis de dificuldade
- Ver estatísticas do quiz
- Geração de perguntas com assistência de IA usando a API do Groq

## Como começar

### Pré-requisitos

- Node.js (versão 14 ou posterior)
- NPM (versão 6 ou posterior)

### Instalação

1. Clone o repositório:

    ```sh
    git clone https://github.com/yourusername/nuxt3-quiz-editor.git
    ```

2. Navegue até o diretório do projeto:

    ```sh
    cd nuxt3-quiz-editor
    ```

3. Instale as dependências:

    ```sh
    npm install
    ```

4. Crie um arquivo `.env` na raiz do projeto e adicione sua chave da API do Groq:

    ```sh
    GROQ_API_KEY=sua chave de API do Groq
    ```

### Utilização

1. Inicie o servidor de desenvolvimento:

    ```sh
    npm run dev
    ```

2. Abra seu navegador e navegue até `http://localhost:3000`.

3. Use o editor de quiz para criar e gerenciar suas perguntas de quiz.

4. Para utilizar a funcionalidade de geração de perguntas de IA:
   - Introduza um tópico ou conceito na área de texto do Assistente de perguntas de IA.
   - Clique em "Generate Question".
   - A pergunta gerada por IA, as opções e a explicação serão automaticamente preenchidas no formulário

### Estrutura do projeto

- `index.html`: O arquivo HTML principal que contém o editor de quiz.
- `view-all-questions.html`: N/A (A ser implementado futuramente).
- `README.md`: Arquivo de documentação para o projeto.

### Geração de Perguntas com IA

A função `generateQuestion` usa a API do Groq para gerar perguntas de quiz baseadas na entrada do usuário. A função envia uma solicitação POST para a API do Groq e recebe uma resposta com uma pergunta, quatro opções e uma explicação, formatada da seguinte forma:

```
"Question? | Option 1 | Option 2 | Option 3 | Option 4 | Explanation."
```

A função analisa a resposta e preenche o formulário do editor de quiz com o conteúdo gerado.

## Exemplo

Abaixo está um exemplo de como o Assistente de perguntas de IA funciona:

1. Digite um tópico na área de texto do Assistente de perguntas de IA, por exemplo, "Closures em JavaScript".
2. Clique em "Generate Question".
3. O formulário será preenchido com uma pergunta, opções e uma explicação gerada pela IA.

## Contribuir

As contribuições são bem-vindas! Por favor, abra uma issue ou submeta um pull request para quaisquer alterações ou melhorias.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o ficheiro [LICENSE](LICENSE) para mais detalhes.
