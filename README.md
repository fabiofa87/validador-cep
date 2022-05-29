# Sobre o projeto

Projeto realizado com React e NodeJS.
A ideia do projeto é rodar um servidor que tenha um endpoint que foi utilizado com GET recebendo um parâmetro. Este parâmetro é passado para um endereço de uma api que faz a busca por CEPs e retorna o status, endereço, bairro e estado.
Ao rodar o projeto, você coloca o cep desejado no input e ele será enviado para a rota como parâmetro que será introduzido no endpoint da API.

![Screenshot from 2022-05-29 17-53-50](https://user-images.githubusercontent.com/64399840/170891105-aca55540-ccfd-4904-9435-260f3dea3dd7.png)
![Screenshot from 2022-05-29 17-53-45](https://user-images.githubusercontent.com/64399840/170891107-812f3bde-552e-400b-a84c-ecb7016e9415.png)
![Screenshot from 2022-05-29 17-53-37](https://user-images.githubusercontent.com/64399840/170891108-ea539498-f98d-45c8-964b-1b4cb5f7b10d.png)



## Para rodar o projeto:

- Clonar repositório
- Yarn install / npm i
- yarn dev / npm run dev
- yarn start / npm run start
- Digitar no navegador: http://localhost:4001
- Digitar CEP desejado no input

## Scripts Disponíveis

Scripts criados para facilitar a navegação:

### `npm start / yarn start`

Vai iniciar o React e toda a parte de front-end do projeto.\
Iniciar [http://localhost:4001](http://localhost:4001).

### `npm test / yarn test`

Criei um simples case de teste para o endpoint. Criado com Jest e será mostrado o resultado ao rodar.

![Screenshot from 2022-05-28 20-18-52](https://user-images.githubusercontent.com/64399840/170890809-b1a610c0-0be5-4189-8ca0-6be72373170f.png)


### `npm run dev / yarn dev`
 
 Inicia o servidor com auxílio do Nodemon. Ao rodar será iniciado na porta 4000.

## Outras dependências:

### Axios
### Styled-components
### Nodemon
### ExpressJS
### Jest
### Supertests
