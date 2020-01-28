# Ammo teste client

Este client foi construído com [React](https://pt-br.reactjs.org/) [typescript](https://www.typescriptlang.org/), [axios](https://github.com/axios/axios), [styled-components](https://styled-components.com/), [CRA](https://github.com/facebook/create-react-app)

## Rodando o projeto

Copiar o arquivo `.env.example` e setar a URL do [serviço](https://github.com/Chiaparini/ammo-teste-service)

Primeiro instalar as dependências: `npm i`

Após o termino das instalações, para rodar o projeto em ambiente de desenvolvimento: `npm start`
Para rodar os testes: `npm test`
E para buildar: `npm build`

Para subir as mudanças, existe um pipeline na AWS que verifica as alterações na branch `master`, assim que algum commit for feito nesta branch, o pipeline ira executar o build. 