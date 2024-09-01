# Vue 3 Learning Game - Quiz Editor

Este projeto é um editor de quiz simples construído com Vue.js. Permite aos utilizadores criar, editar e gerir perguntas de quiz.

## Funcionalidades

-   Adicionar, editar e excluir perguntas de quiz
-   Gerir categorias de quiz e níveis de dificuldade
-   Ver estatísticas do quiz

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

### Preparando o servidor

#### Política CORS

1. Para realizar requisições externas ao storage, é necessário alterar a política CORS do firebase. E como ele utiliza a mesma infraestrutura do Google Cloud, é necessário baixar a ferramenta CLI do Google Cloud.

    ```sh
    curl https://sdk.cloud.google.com | bash
    ```

2. Reinicie a shell.

    ```sh
    exec -l $SHELL
    ```

3. Inicializar gcloud. Ele irá pedir para você selecionar sua conta e autenticar.

    ```sh
    gcloud init
    ```

4. Crie um arquivo json com o seguinte conteúdo.

    ```json
    [
    	{
    		"origin": ["*"],
    		"responseHeader": ["Content-Type"],
    		"method": ["GET", "POST", "HEAD", "DELETE"],
    		"maxAgeSeconds": 3600
    	}
    ]
    ```

5. Execute o seguinte comando substituindo com o endereço gs:// para o storage que deseja alterar a política CORS.

    ```sh
    gsutil cors set yourFile.json gs://yourProject
    ```

#### Configurando o storage e autenticação

1. Para permitir escritas e leituras no storage, também é necessário alterar as regras. Com o seguinte código, ele irá aceitar leituras e escritas provenientes de qualquer pessoa.

**OBS**: Acesse o console do firebase, na aba "Regras" da opção "Storage", para atualizar o arquivo de regras abaixo

    ```
    rules_version = '2';

    service firebase.storage {
    	match /b/{bucket}/o {
    		match /{allPaths=**} {
    			allow read: if true;
    			allow write: if request.auth != null;
    		}
    	}
    }
    ```

2. E por fim, para fazer uma requisição de escrita e acessar a dashboard, o usuário precisa estar logado. Então, na opção de autenticação do Firebase, crie um usuário com o método e-mail/senha.

### Utilização

1. Utilize um servidor http para visualizar o arquivo index.html, instale utilizando o "npm install" (http-server, live-server, etc.)
e para rodar utilize o "npx" (npx http-server, por exemplo)

3. Abra seu navegador e navegue até `http://localhost:3000` (pode estar rodando na 3000 que é a padrão ou outra porta, verificar ao rodar o servidor).

4. Acesse o editor de quiz pela rota "login.html" para logar, e crie e gerencie suas perguntas de quiz.

## Créditos
🌟 Projeto criado por: Allan Silva 😎 e Otto Schmidt 😄 🌟


## Contribuir

As contribuições são bem-vindas! Por favor, abra uma issue ou submeta um pull request para quaisquer alterações ou melhorias.
