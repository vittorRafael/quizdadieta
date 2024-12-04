# Quiz API

Esta aplicação é uma API para registrar respostas a um questionário de fitness. Ela possui um único endpoint `/answer`, que aceita um pedido POST para salvar as respostas no banco de dados `quizbd`, na tabela `quiz_respostas`. A aplicação foi desenvolvida utilizando o framework Fastify e outras bibliotecas para autenticação, criptografia, validação de dados e mais.

## Tecnologias Utilizadas

- **Node.js**
- **Fastify** (`v5.0.0`)
- **Prisma** (`v5.18.0`) - ORM para interação com o banco de dados.
- **Zod** (`v3.23.8`) - Validação de dados.
- **Bcryptjs** (`v2.4.3`) - Criptografia de senhas.
- **Dayjs** (`v1.11.13`) - Manipulação de datas.
- **Dotenv** (`v16.4.5`) - Gerenciamento de variáveis de ambiente.
- **TypeScript** (`v5.5.4`) - Desenvolvimento com tipagem estática.
- E outras bibliotecas listadas em `dependencies` e `devDependencies`.

## Instalação

1. Clone este repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```
2. Navegue para a pasta do projeto:
   ```bash
   cd <PASTA_DO_PROJETO>
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Crie um arquivo `.env` para configurar as variáveis de ambiente necessárias:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/quizbd"
   ```

## Estrutura do Banco de Dados

A tabela `quiz_respostas` possui o seguinte esquema:

```prisma
model QuizResposta {
  id               String  @id @default(uuid())
  email            String
  nome             String
  genero           String
  idade_faixa      String
  objetivo_fitness String
  me_identifico    String
  objetivo_corpo   String
  me_incomoda      String
  me_sentir_bem    String
  atividade_fisica String
  altura           Int
  peso_atual       Decimal
  peso_objetivo    Decimal
  idade            Int
  me_sinto         String
  created_at       DateTime @default(now())

  @@map("quiz_respostas")
}
```

## Validação de Dados

Os dados enviados para o endpoint `/answer` são validados utilizando o Zod com o seguinte esquema:

```typescript
const registerBodySchema = z.object({
  email: z.string().email(),
  nome: z.string(),
  genero: z.enum(["Homem", "Mulher"]),
  idade_faixa: z.enum(["18-24", "25-34", "35-44", "45+"]),
  objetivo_fitness: z.enum(["Emagrecer", "Manter o peso", "Ganhar peso"]),
  me_identifico: z.enum(["Magro", "Normal", "Gordinho", "Obeso"]),
  objetivo_corpo: z.enum(["Magro", "Normal", "Gordinho", "Obeso"]),
  me_incomoda: z.enum(["Perna", "Barriga", "Culote", "Braços", "Nada"]),
  me_sentir_bem: z.enum([
    "Há mais de 3 anos",
    "Há 1-3 anos",
    "Nunca me sentir bem",
    "Já me sinto bem",
  ]),
  atividade_fisica: z.enum([
    "Não faço",
    "Faço 1-2x",
    "Faço 3-4x",
    "Faço 5x ou +",
  ]),
  altura: z.number(),
  peso_atual: z.number(),
  peso_objetivo: z.number(),
  idade: z.number(),
  me_sinto: z.enum(["Motivado(a)", "Confiante", "Nervoso(a)", "Frustado(a)"]),
});
```

## Endpoints

### POST `/answer`

**Descrição**: Endpoint para cadastrar uma resposta no questionário.

**Corpo da Requisição**:

```json
{
  "email": "exemplo@dominio.com",
  "nome": "João",
  "genero": "Homem",
  "idade_faixa": "25-34",
  "objetivo_fitness": "Emagrecer",
  "me_identifico": "Normal",
  "objetivo_corpo": "Magro",
  "me_incomoda": "Barriga",
  "me_sentir_bem": "Nunca me sentir bem",
  "atividade_fisica": "Faço 3-4x",
  "altura": 170,
  "peso_atual": 75.5,
  "peso_objetivo": 70.0,
  "idade": 30,
  "me_sinto": "Motivado(a)"
}
```

**Exemplo de Resposta**:

```
statuscode = 201
```

## Executando a Aplicação

1. Para iniciar a aplicação em ambiente de desenvolvimento:
   ```bash
   npm run dev
   ```
2. Para rodar a aplicação em produção:
   ```bash
   npm start
   ```

## Testes

A aplicação utiliza o Vitest para testes automatizados. Para rodar os testes, utilize o comando:

Para testes unitários:

```bash
npm run test
```

Para testes e2e:

```bash
npm run test:e2e
```
