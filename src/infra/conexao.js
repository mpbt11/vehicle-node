//const mysql = require('mysql');
const { Client } = require("pg");

const config = {
  host: "localhost",
  port: "5432",
  user: "postgres",
  password: "",
  database: "postgres"
};

const createDbConnection = () => {
  const conexao = new Client(config);
  return conexao;
};

module.exports = { createDbConnection };