# Projeto Talker Manager

O Blogs API é uma API que permite o cadastro de palestrantes. É possível cadastrar, visualizar, pesquisar, editar e excluir informações (CRUD) e realizar login. A API salva os dados em arquivos locais por meio do módulo fs (file system) do Node.Js.

O projeto foi desenvolvido durante o módulo de back-end na [Trybe](https://www.betrybe.com/).

## Tecnologias e ferramentas utilizadas 

![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

## Implementações

- Utilização do Docker para criar o ambiente de desenvolvimento;
- Criação de endpoints utilizando o framework Express.JS;
- Middleware para as validações para os campos de login e de palestrantes.

## Instalação com Docker:

1. Clone o repositório:

```
git@github.com:andre-usf/talker-manager-project.git
```

2. Entre no diretório criado:

```
talker-manager-project
```

3. Inicie o docker compose:

```
docker-compose up -d --build
```

4. Acesse o terminal dentro do container:

```
docker exec -it talker_manager bash
```

5. Instale as dependências:

```
npm install
```

6. Inicie a aplicação:

```
npm run dev
```

## Instalação local (sem Docker):

<br>

1. Siga os passos 1 e 2 da seção anterior.
2. Instale as dependências:
```
npm install
```
3. Inicie a aplicação:

```
npm run dev
```

## Sobre mim

[Linkedin](https://www.linkedin.com/in/andrefretta/)

<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto no qual você pode customizar e reutilizar todas as vezes que for executar o trybe-publisher.

Para deixá-lo com a sua cara, basta alterar o seguinte arquivo da sua máquina: ~/.student-repo-publisher/custom/_NEW_README.md

É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
:warning: IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.
-->
