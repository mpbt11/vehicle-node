const chaiPromised = require("chai-as-promised");
const chai = require("chai");
const expect = chai.expect;
const VehiclesDao = require("../src/dao/vehicle");

chai.use(chaiPromised);

const veicle = new VehiclesDao();

const exempleReq = {
  placa: "ABC-123",
  chassi: "12345678912345678",
  renavam: "12345678910",
  modelo: "Gol 1.0 Trendline",
  marca: "Gol",
  ano: "2022",
};

describe("TestVehicles", () => {
  describe("insert", () => {
    it("deveria conter um objeto contendo um número e um objeto", () => {
      return veicle.insert(exempleReq).then((dados) => {
        expect(dados).to.be.a("object");
        expect(dados.data.datadadoss).have.keys(
          "id_vehicles",
          "placa",
          "chassi",
          "renavam",
          "modelo",
          "marca",
          "ano"
        );
      });
    });
  });

  describe("update", () => {
    it("deveria conter um objeto contendo um número e um objeto", () => {
      return veicle.update(exempleReq, 1).then((dados) => {
        expect(dados).to.be.a("object");
        expect(dados.status).to.be.a("number");
        expect(dados.data.datadadoss).have.keys(
          "id_vehicles",
          "placa",
          "chassi",
          "renavam",
          "modelo",
          "marca",
          "ano"
        );
      });
    });
  });

  describe("getById", () => {
    it("deveria conter um objeto contendo um número e um objeto", () => {
      return veicle.getById(7).then((dados) => {
        expect(dados).to.be.a("object");
        expect(dados.status).to.be.a("number");
        expect(dados.data.datadadoss).have.keys(
          "id_vehicles",
          "placa",
          "chassi",
          "renavam",
          "modelo",
          "marca",
          "ano"
        );
      });
    });
  });

  describe("select", () => {
    it("deveria conter um objeto contendo um número e um array", () => {
      return veicle.select().then((dados) => {
        expect(dados).to.be.a("object");
        expect(dados.status).to.be.a("number");
        expect(dados.data).to.be.a("array");
      });
    });
  });

  describe("delete", () => {
    it("deveria conter um objeto e um número", () => {
      return veicle.delete(9).then((dados) => {
        expect(dados).to.be.a("object");
        expect(dados.status).to.be.a("number");
      });
    });
  });
});