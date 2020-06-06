//#region Dependencias
import express from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';
import { errors } from 'celebrate';
//#endregion

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

//#region Anotações

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// POST http://localhost:3333/users = Criar um usuário
// GET http://localhost:3333/users = Listar usuários
// GET http://localhost:3333/users/5 = Buscar dados do usuário com ID 5

// Request Param: Parâmetros que vem na própria rota que indentificam um recurso
// Query Param: Parâmetros que vem na própria rota geralmente opcionais pra filtros, paginação
// Request Body: Parâmetros para criação/atualização de informações

// Knex('users').where('name','email').select('*')

//#endregion

//#region Exemplos
// const users = [
//     'Valter',
//     'Lucas',
//     'Wesley',
//     'Diego',
//     'Diogo',
//     'Giuliana',
// ]

// app.get('/users', (request, response) => {
//     const search = String(request.query.search);
//     const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
//     return response.json(filteredUsers);
// });

// app.get('/users/:id', (request, response) => {
//     const id = Number(request.params.id);
//     const user = users[id];
//     return response.json(user);
// })

// app.post('/users',(request, response) =>{
//     const data = request.body;
//     console.log(data);

//     const user = {
//         name: data.name,
//         email: data.email
//     };
//     return response.json(user);
// });
//#endregion

app.use(errors());

app.listen(3333);