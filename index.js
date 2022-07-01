const app = require("./src/config/customExpress");
const http = require("http");

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("Aplicação executando na porta.", 3000);
});