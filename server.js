import http from "node:http";
import { Database } from "./database.js";
import { randomUUID } from "node:crypto";

//GET users => buscar usuários
//POST users => criar usuários

const database = new Database();

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/users") {
    const users = database.select("users");

    return res.end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    const users = {
      id: randomUUID(),
      name: "Deyvson",
      email: "deyvsonaguiar@gmail.com",
    };

    database.insert("users", users);

    return res.writeHead(201).end();
  }

  return res.writeHead(404).end("This route don't exists!");
});

server.listen(3333);
