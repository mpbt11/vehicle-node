const VehiclesDao = require("../dao/vehicle");
const { createDbConnection } = require("../infra/conexao");

exports.addVehicle = async (dados) => {
  let response;
  const connection = createDbConnection();
  const vehiclesDao = new VehiclesDao(connection);

  try {
    await connection.connect();

    const vehicle = (await vehiclesDao.insert(dados)).rows;

    response = {
      json: {
        status: 200,
        mensagem: "Cadastro realizado com sucesso!",
        vehicle: vehicle,
      },
    };
  } catch (error) {
    response = { json: { status: 500, mensagem: "Erro ao cadastrar" } };
  } finally {
    await connection.end();

    return response;
  }
};

exports.updateVehicle = async (dados, res) => {
  let response;
  const connection = createDbConnection();
  const vehiclesDao = new VehiclesDao(connection);

  try {
    await connection.connect();

    const [vehicle] = (await vehiclesDao.update(dados)).rows;

    if (!vehicle)
      return (response = {
        json: {
          status: 404,
          mensagem: "Veículo não existe na base de dados!",
        },
      });

    response = {
      json: {
        status: 200,
        mensagem: "Atualizado com sucesso!",
        vehicle: vehicle,
      },
    };
  } catch (error) {
    response = { json: { status: 500, mensagem: "Erro ao atualizar!" } };
  } finally {
    await connection.end();

    return response;
  }
};

exports.selectByIdVehicle = async (dados) => {
  let response;
  const connection = createDbConnection();
  const vehiclesDao = new VehiclesDao(connection);

  try {
    await connection.connect();

    const vehicle = (await vehiclesDao.getById(dados)).rows;

    response = {
      json: {
        status: 200,
        mensagem: "Consulta realizada com sucesso!",
        vehicle: vehicle,
      },
    };
  } catch (error) {
    response = {
      json: { status: 500, mensagem: "Erro ao consultar veículo!" },
    };
  } finally {
    await connection.end();

    return response;
  }
};

exports.selectVehicle = async () => {
  let response;
  const connection = createDbConnection();
  const vehiclesDao = new VehiclesDao(connection);

  try {
    await connection.connect();

    const vehicles = (await vehiclesDao.select()).rows;

    response = {
      json: {
        status: 200,
        mensagem: "Consulta realizada com sucesso!",
        vehicle: vehicles,
      },
    };
  } catch (error) {
    response = {
      json: { status: 500, mensagem: "Erro ao consultar veículo!" },
    };
  } finally {
    await connection.end();
  
    return response;
  }
};

exports.deleteVehicle = async (dados) => {
  let response;
  const connection = createDbConnection();
  const vehiclesDao = new VehiclesDao(connection);

  try {
    await connection.connect();

    const [vehicle] = (await vehiclesDao.delete(dados)).rows;

    if (!vehicle)
      return (response = {
        json: {
          status: 404,
          mensagem: "Veículo não existe na base de dados!",
        },
      });

    response = {
      json: {
        status: 200,
        mensagem: "Veículo excluído com sucesso!",
      },
    };
  } catch (error) {
    response = {
      json: { status: 500, mensagem: "Erro ao excluir veículo!" },
    };
  } finally {
    await connection.end();

    return response;
  }
};