const express = require("express");
const cors = require("cors");

const { v4: uuid, validate: isUuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());


const repositories = [];
// --------------Log-----------------
function logRequest(request, response, next){
  const { method, url} = request;

  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.time(logLabel);

  next(); //próximo middleware

  console.timeEnd(logLabel);
}
// ------------Validador Id--------------------
function validateProjectId(request, response, next){
  const { id } = request.params;
  
  if(!isUuid(id)){
          return response.status(400).json( {error: 'Repository is not exist.'});
  }
  return next();
}

//------------aplicando widdlewares-----------
app.use(logRequest);
app.use('/projects/:id', validateProjectId);


//-------------------ROTAS--------------------
app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs} = request.body;

  const repository = {
    id: uuid(), 
    title, 
    url, 
    techs, 
    likes: 0 
  };

  repositories.push(repository)

  return response.json(repository)
});

app.put("/repositories/:id", (request, response) => {
  const { id } =  request.params;
  const { title, url, techs} = request.body;

  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if(repositoryIndex === -1){
    return response.status(400).json({"error": "Repository Not Found"})
  }
  
  const repository = {
    id,
    title,
    url,
    techs,
    likes: repositories[repositoryIndex].likes,
  };
  repositories[repositoryIndex] = repository;

  return response.json(repository)
});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;

  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if(repositoryIndex < 0){
    return response.status(400).json({"error":"Project Not Found"});
  }

  repositories.splice(repositoryIndex, 1);

  return response.status(204).send();
}); 

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;
  const { like } = request.body;
  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if(repositoryIndex === -1){
    return response.status(400).json({"error":"Repository Not Found"});
  }

  repositories[repositoryIndex].likes++;

  return response.json(repositories[repositoryIndex]);
});

module.exports = app;
