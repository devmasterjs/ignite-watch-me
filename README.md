# ignite-watch-me
(Rocketseat Education) - Desafio 02 - Componentizando a aplicação

# 💻 Objetivo do Desafio

O principal objetivo é refatorar uma página para listagem de filmes de acordo com gênero. 

A aplicação já está totalmente funcional mas grande parte do seu código está diretamente no arquivo `App.tsx`. 
Para resolver isso da melhor forma, é necessário dividir a aplicação em **pelo menos** duas partes principais: 
- sidebar
- conteúdo principal que possui o header e a listagem de filmes.

## Detalhes da aplicação
- A aplicação possui apenas uma funcionalidade principal que é a listagem de filmes;
- Na sidebar é possível selecionar qual categoria de filmes deve ser listada;
- A primeira categoria da lista (que é "Ação") já deve começar como marcada;
- O header da aplicação possui apenas o nome da categoria selecionada que deve mudar dinamicamente.

### Fake API com JSON Server

É utilizado o JSON Server para simular uma API que possui as informações de gêneros e filmes. 

Para inicializar o JSON Server, acesse a pasta principal do projeto e execute os seguintes comandos no terminal:

```bash
yarn
yarn server
```

Perceba que ele iniciou uma fake API com os recursos /genres e /movies em localhost na porta 3333 a partir das informações do arquivo server.json localizado na raiz do seu projeto. 
Acessando essas rotas no seu navegador, você consegue ver o retorno das informações no formato JSON.

Dessa forma, basta consumir essas rotas da API normalmente com o Axios. 
Caso queira estudar mais sobre o **JSON Server**, acesse este link: [typicode/json-server](https://github.com/typicode/json-server)

