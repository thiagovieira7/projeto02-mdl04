Description
Criação do projeto utilizando o NESTJS, um dos melhores frameworks para se trabalhar, ele utiliza Typescript, a linguagem de programação que vamos utilizar e pode ser executado em frameworks HTTP como expressJS ou Fastify. Também utilizando a integração do Prisma e Postgresql.

Installation
Para iniciar com o NestJS devemos instalar a NestJS CLI de forma global:

npm i -g @nestjs/cli
Crie e abra uma pasta no VSCode onde você deseja que o repositório que vamos criar, fique armazenado. Para criar um novo projeto utilize o seguinte comando e onde está project-name mude para o nome do seu projeto.

nest new project-name
Logo após ele vai perguntar qual gerencador de pacotes queremos usar, pode utilizar o da sua preferência, nesse exemplo utilizaremos o npm.

Neste momento, foi criado uma nova pasta com o seu projeto, você deve garantir que a pasta que foi criada, esteja aberta no VSCode:

cd "my-nest-project"
Para testar se o seu projeto está rodando, entre com o comando:

npm run start:dev
Ele deverá por padrão em http://localhost:3000

Quando rodamos esse comando, automaticamente o NestJS gera a pasta dist, onde contém arquivos .js, .map e `.d.ts.

Explorando um pouco a estrutura do NestJS, percebemos que temos 5 arquivos que foram gerados automaticamente dentro da pasta src:

img

São eles:

app.controller.spec.ts,
app.controller.ts,
app.module.ts,
app.service.ts
E dentro dessa aplicação temos o arquivo mais importante que é o "coração" do projeto o main.ts.
Este Projeto Contém:
​ [Postgres+ NestJS + TypeScript + Prisma + JWT]

O projeto consiste em criar uma API que servirá para controle do Twitter, onde o usurio postará tweets e terá seguidores.

Respeitando o diagrama, os alunos devem desenvolver o schema prisma para montar o banco postgres, toda interação das tabelas é one to many.

O JWT nesse projeto deve apenas servir de autenticação, ou seja apenas fornecendo um token valido na aplicação.

Em nossos arquivos DTO é necessário que realizemos as validações por meio dos @Decorators.

Para este projeto foram criadas 4 pastas distintas dentro da pasta src são elas:

Pasta seguidores.
Pasta seguindo.
Pasta tweets.
Pasta usuario
Para criação das pastas é necessario rodar o comando nest g resource-nome da pasta para criação de cada uma delas, exemplo:

nest g resource usuario
Com esse comando havera a criação da pasta no caso (usuario) e dentro dela terá todos os demais arquivos e pastas necessario para rodar o projeto desta pasta.

Rode o mesmo comando para criação das outras três pastas.

Algumas Validações Importantes
Rode estes dois comandos:

npm i --save class-validator class-transformer
npm i --save helmet
E faça as alterações necessarias para que seu codigo fique desta maneira:

import { ValidationPipe } from '@nestjs/common'; //Para o class-validator funcionar
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet'; // Para o helmet funcionar

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); //Para funcionar o class-validator
  app.use(helmet()); //Para funcionar o helmet
  await app.listen(3000);
}
bootstrap();
Em Geral DTO:
DTO ( Data Transfer Object ) é usado para analisar e validar os dados da solicitação. DTOs sempre são usados com controladores . É um cenário comum quando o servidor da web deve validar os dados antes do processamento. O DTO pode otimizar e automatizar esse processo.

Decoradores para validação
Há um conjunto de decoradores para validação de dados conveniente. Se você tiver necessidades especiais de validação, você sempre pode implementar seu próprio decorador (leia mais em avançado). Mas decoradores personalizados podem ser implementados. Leia em Avançado sobre isso.

​ https://odi.gitbook.io/core/basics/dto

Prisma
Para que o prisma podesse ser utilizado instalei as seguintes dependencias:

npm install prisma --save-dev
npx prisma init
npm install @prisma/client
Este comando é para gerar a tabela do schema.prisma no banco do Postgre :

npx prrisma generate
Este é para dar um push na tabela:

npx prisma db push
Este comando é para testar se tudo esta certo e funcionando corretamente no prisma estudio ainda na versão beta:

npx prisma studio
Rotas
Temos 4 rotas principais:

post-usuario

tweets

seguidores

seguindo

Dentro de cada rota temos um CRUD completo criado com os Decorators:

@POst() Cada uma das rotas principais tem o seu:

 @Post()
  create(@Body() createSeguidoreDto: CreateSeguidoreDto) {
    return this.seguidoresService.createPrisma(createSeguidoreDto);
  }
@Post()
  create(@Body() createSeguindoDto: CreateSeguindoDto) {
    return this.seguindoService.createPrisma(createSeguindoDto);
  }
@Post()
  create(@Body() createTweetDto: CreateTweetDto) {
    return this.tweetsService.createPrisma(createTweetDto);
  }
 @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }
@Patch(':id') Cada uma das rotas principais tem o seu:

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeguidoreDto: UpdateSeguidoreDto) {
    return this.seguidoresService.updatePrisma(+id, updateSeguidoreDto);
  }
@Patch(':id')
  update(@Param('id') id: string, @Body() updateSeguindoDto: UpdateSeguindoDto) {
    return this.seguindoService.updatePrisma(+id, updateSeguindoDto);
  }
@Patch(':id')
  update(@Param('id') id: string, @Body() updateTweetDto: UpdateTweetDto) {
    return this.tweetsService.updatePrisma(+id, updateTweetDto);
  }
@Patch(':id')
  update(@Param('id') id: string, @Body() updateFilmeDto: UpdateUsuarioDto) {
    return this.usuariosService.updatePrisma(+id, updateFilmeDto);
  }
@Delete() cada rota principal tem o seu:

@Delete(':id')
  remove(@Param('id') id: string) {
    return this.seguidoresService.removePrisma(+id);
  }
@Delete(':id')
  remove(@Param('id') id: string) {
    return this.seguindoService.removePrisma(+id);
  }
@Delete(':id')
  remove(@Param('id') id: string) {
    return this.tweetsService.removePrisma(+id);
  }
@Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.removePrisma(+id);
  }
@Get () cada rota principal tem o seu:

@Get()
  findAll() {
    return this.seguidoresService.findAllPrisma();
  }
 @Get()
  findAll() {
    return this.seguindoService.findAllPrisma();
  }
@Get()
  findAll() {
    return this.tweetsService.findAllPrisma();
  }
 @Get()
  findAll() {
    return this.usuariosService.findAllPrisma();
  }
@Get(':id') cada rota principal tem o seu:

@Get(':id')
  findOne(@Param('id') id: string) {
    return this.seguidoresService.findOnePrisma(+id);
  }
@Get(':id')
  findOne(@Param('id') id: string) {
    return this.seguindoService.findOnePrisma(+id);
  }
 @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tweetsService.findOnePrisma(+id);
  }
 @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOnePrisma(+id);
  }
Post rota /usuarios , no Thunder:

post-usuario

​ Usado para adicionar um usuario no banco de dados local.
​ Para adicionar um usuario dentro do banco, necessita passar todos os dados com suas devidas informações a seguir no exemplo:( id, createdAt e updatedAt não precisa passar, pois são autoincrement )
  "email":         //String
  "senha":         //String
  "nome":          //String 
  "imagem":        //String?
  "bio":           //String 
  "nascimento":    //String 
postthamy

Post rota `/tweets , no Thunder:

tweets

​ Usado para postar uma mensagem.
​ Para adicionar um tweets, necessita passar todos os dados com suas devidas informações a seguir no exemplo:
  "texto":         //String
  "emoji":         //String? 
  "curtidas":      //Number
  "usuarioid":     //Number 
tweetsp

Post rota /seguidores , no Thunder:

seguidores

​ Usado para adicionar um seguidor ao usuario ja existente no banco.
​ Para adicionar um seguidor, necessita passar o ID do usuario ja existente exemplo:
 "usuarioid": 3,           //Number
seguidoresp

Post rota `/seguindo , no Thunder:

seguindo

​ Usado para informar quem o usuario esta seguindo
​ Para adicionar quem o usuario esta seguindo, necessita passar o ID do usuario ja existente, exemplo:
 "usuarioid": 3,           //Number
seguindop

Todos os id são autoincrement (criado sozinho, não precisa passar)
JWT
Para que o jwt possa ser iniciado, fazer a criação manual da pasta auth dentro de src.

Este comando cria uma nova pasta e dentro dela, o novo AuthModule. Além disso, este módulo é importado por padrão no AppModule.

nest g m auth
Este comando cria a classe AuthService e fornece automaticamente este serviço dentro do AuthModule.

nest g s auth
Este comando cria a classe AuthController e a adiciona automaticamente à propriedade dos controladores no AuthModule.

nest g c auth
A aplicação agora está pronta para registrar usuários e autenticá-los com o JWT.

SWAGGER
O Swagger é uma ferramenta que facilita os testes de sua api.

Para começar a implementar ele em sua api, tem de usar:

npm install --save @nestjs/swagger swagger-ui-express
Após isso, abra a pasta main.ts e adicione as seguintes informações:

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Api')
    .setDescription('Api')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);  // -> Esse "api" é o nome que será passado na url para usar o swagger.

  await app.listen(3000);
}
bootstrap();
Após isso, apenas inicie seu projeto, utilizando:

npm run start:dev
Assim que for iniciada a sua api, basta entrar em http://localhost:3000/api/ -> o "api" é configurado no main.ts caso queria mudar basta alterar onde foi passado logo a cima.

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Api')
    .setDescription('Api')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);  // -> Esse "api" é o nome que será passado na url para usar o swagger.

  await app.listen(3000);
}
bootstrap();
