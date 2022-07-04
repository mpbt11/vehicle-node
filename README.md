#  :car: API | CRUD de Veículos
 
 #
 API CRUD de Veículos utilizando Node.js 

Contém os métodos:
• Listar
• Mostrar
• Inserir
• Editar
• Deletar
#

# Banco de Dados (PostgreSQL)

CREATE DATABASE db_info;

CREATE TABLE db_info.vehicles (
	id_vehicles serial NOT NULL,
	placa varchar(7) NOT NULL,
	chassi varchar(17) NOT NULL,
	renavam varchar(11) NOT NULL,
	modelo varchar(20) NOT NULL,
	marca varchar(20) NOT NULL,
	ano varchar(4) NOT NULL,
	CONSTRAINT vehicles_pkey PRIMARY KEY (id_vehicles)
);

# Teste Unitário (Mocha)
Foi realizado uma estrutura de teste utilizando Mocha para cada metódo do CRUD. 
- npm run test

# Como rodar o Projeto

- Instalar todas as dependencias indicada pelo package.json
  - npm install

- Rodar o projeto usando o nodemon
  - nodemon index.js
  

# Servidor
O projeto roda na porta 3000.

# Desenvolvido por
# Maria Paula Torres
