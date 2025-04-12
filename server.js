import http from "node:http";

//GET users => buscar usuários
//POST users => criar usuários

const users = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/users") {
    return res
      .setHeader("Content-Type", "application/json")
      .end(JSON.stringify(users));
  }
  if (method === "POST" && url === "/users") {
    users.push({
      id: 1,
      name: "Deyvson",
      email: "deyvsonaguiar@gmail.com",
    });

    return res.end("Criação de usuários");
  }
  return res.end("Hello ignite");
});

server.listen(3333);
