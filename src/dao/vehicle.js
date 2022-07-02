class VehiclesDao {
  constructor(connection) {
    this._con = connection;
  }

  insert(dados) {
    let values = [
      dados.placa,
      dados.chassi,
      dados.renavam,
      dados.modelo,
      dados.marca,
      dados.ano,
    ];

    let query = `
            INSERT INTO db_info.vehicles(
                placa,
                chassi,
                renavam,
                modelo,
                marca,
                ano
            )
            VALUES   
              ($1, $2, $3, $4, $5, $6)
            RETURNING *
           `;
    return this._con.query(query, values);
  }

  select() {
    let query = `
            SELECT
              *
            FROM
              db_info.vehicles
          `;

    return this._con.query(query);
  }

  update(dados) {
    let values = [
      dados.id_vehicles,
      dados.placa,
      dados.chassi,
      dados.renavam,
      dados.modelo,
      dados.marca,
      dados.ano,
    ];

    let query = `
            UPDATE
              db_info.vehicles
            SET
                placa = $2,
                chassi = $3,
                renavam = $4,
                modelo = $5,
                marca = $6,
                ano = $7
            WHERE
              id_vehicles = $1
            RETURNING *
            `;

    return this._con.query(query, values);
  }

  getById(dados) {
    let values = [dados.id_vehicles];

    let query = `
            SELECT
              *
            FROM
              db_info.vehicles
            WHERE
              id_vehicles = $1
          `;

    return this._con.query(query, values);
  }

  delete(dados) {
    let values = [dados.id_vehicles];

    let query = `
            DELETE
            FROM
                db_info.vehicles
            WHERE
                id_vehicles = $1`;

    return this._con.query(query, values);
  }
}

module.exports = VehiclesDao;