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
- Schema: db_info;
- Tabela: vehicles;
- Atributos:
id_vehicles,
placa,
chassi,
renavam,
modelo,
marca,
ano

# Teste Unitário (Mocha)
Foi realizado uma estrutura de teste utilizando Mocha para cada metódo do CRUD. 
- npm run test

# Como rodar o Projeto

- Criar o arquivo package
  - npm init

- Instalar todas as dependencias indicada pelo package.json
  - npm install

- Rodar o projeto usando o nodemon
  - nodemon index.js
  
- Instalar o PostgreSQL
  - npm install postgres

# Servidor
O projeto roda na porta 3000.

# Desenvolvido por
# Maria Paula Torres
