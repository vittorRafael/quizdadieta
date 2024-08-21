# Passo a passo para iniciar um novo projeto

Node.js e Typescript

### Passo 1
 - [ ] Iniciar o package json com `npm init -y`;
 - [ ] Instalar dependencias de produção com `npm i fastify @fastify/cookie @prisma/client dotenv zod`;
 - [ ] Instalar dependencias de desenvolvimento com `npm i typescript tsx tsup prisma globals @types/node -D`;
 - [ ] Adicionar scripts no `package.json`. Script de dev: `"dev": "tsx watch src/server.ts"`, de produção: `"start": "node build/server.js"` e de build: `"build": "tsup src --out-dir build"`;
    

 ### Passo 2
 - [ ] Criar pasta src com os arquivos `server.ts` e `app.ts`;
 - [ ] Dentro de src/ criar pasta env com `index.ts` dentro para exportar variáveis de ambiente com validação;
 - [ ] Iniciar o prisma com `npx prisma init`;
 - [ ] Criar um model para iniciar o banco e rodar `npx prisma generate`;

 ### Passo 3
 - [ ] Rodar `docker run --name <nomedocontainer> -e POSTGRESQL_USERNAME=<usernamedocontainer> -e POSTGRESQL_PASSWORD=<passdocontainer> -e POSTGRESQL_DATABASE=<databasename> -p <5432>:5432 bitnami/postgresql` para criar um container docker com a imagem bitnami;
 - [ ] Rodar `docker start <nomedocontainer>` para iniciar o container docker.
 - [ ] Ir no `.env` e editar o DATABASE_URL ajustar a variável com as informações fornecidas.

 ### Comandos isolados

 - `docker ps`: Listar todos os containers;
 - `docker rm`: Apaga todos os containers parados;
 - `docker rm <nomedocontainer>`: Apaga o container especificado;
 - `docker stop <nomedocontainer>`: Para o container;
 - `docker compose up -d`: Cria um container de acordo com o docker-compose.yml;
 - `npx prisma studio`: Abre no navegador uma interface para visualizar o banco de dados; 
