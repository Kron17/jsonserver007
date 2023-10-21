const jsonServer = require("json-server"); //IMPORTAR EL JSONSERVER
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;  //SE PUEDE CAMBIAR POR CUALQUIER PUERTO

server.use(middlewares);
server.use(router);
server.listen(port);