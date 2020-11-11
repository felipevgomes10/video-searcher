# Video Searcher
Projeto em NextJS de um site que busca videos da API do Youtube e mostra as suas estatísticas, como likes, dislikes e views.

# Deploy do projeto
Como o projeto foi criado utilizando o NextJS, o deploy do projeto foi feito na plataforma da Vercel, que é a dona do NextJS e oferece hospedagem gratuita.
Para acessar o projeto <a href='https://videosearcher.vercel.app'>clique aqui</a>.
__**A API DO YOUTUBE LIMITA A QUANTIDADE QUE REQUESTS, ENTÃO CUIDADO AO TESTAR O SITE POIS VOCÊ PODE SER BLOQUEADO PELA API TANTO SE ESTIVER USANDO O LINK
ACIMA OU UM SERVIDOR LOCAL.**__

# Dependências usadas no projeto
O projeto foi criado com o comando "npx create-next-app", que gera automaticamente um modelo inicial de projeto. Além disso foram adicionadas algumas dependências
extras no projeto. Ao todo elas são:

```
"dependencies": {
    "next": "10.0.1",
    "next-images": "^1.6.2",
    "proptypes": "^1.1.0",
    "react": "17.0.1",
    "react-dom": "17.0.1",
    "swr": "^0.3.8"
  },
  "devDependencies": {
    "babel-plugin-inline-react-svg": "^1.1.2",
    "eslint": "^7.12.1",
    "eslint-config-prettier": "^6.15.0",
    "eslint-plugin-jsx-a11y": "^6.4.1",
    "eslint-plugin-prettier": "^3.1.4",
    "eslint-plugin-react": "^7.21.5",
    "eslint-plugin-react-hooks": "^4.2.0",
    "prettier": "^2.1.2"
  }
```

Para baixar todas as dependências acima basta abrir o seu terminal de escolha, navegar para dentro da pasta do projeto e rodar o seguinte comando:

```
npm install
```

# Como compilar o projeto
Para abrir o projeto em um servidor local basta abrir o terminal, navegar para a pasta do projeto e rodar o seguinte comando:

```
npm run dev
```
