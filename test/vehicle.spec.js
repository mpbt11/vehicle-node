const chaiPromised = require("chai-as-promised");
const chai = require("chai");
const expect = chai.expect;
const {
  addVehicle,
  updateVehicle,
  selectByIdVehicle,
  selectVehicle,
  deleteVehicle,
} = require("../src/services/service");

chai.use(chaiPromised);

const exempleReq = {
  id_vehicles: 12,
  placa: "ABC-123",
  chassi: "12345678912345678",
  renavam: "12345678910",
  modelo: "Gol 1.0 Trendline",
  marca: "volkswagen",
  ano: "2022",
};

describe("TestVehicles", () => {
  describe("insert", () => {
    it("deveria conter um objeto contendo um número uma string e um objeto", () => {
      return addVehicle(exempleReq).then((dados) => {
        expect(dados.json).to.be.a("object");
        expect(dados.json.status).to.be.a("number");
        expect(dados.json.mensagem).to.be.a("string");
        expect(dados.json.vehicle).have.keys(
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
    it("deveria conter um objeto contendo um número uma string e um objeto", () => {
      return updateVehicle(exempleReq).then((dados) => {
        expect(dados.json).to.be.a("object");
        expect(dados.json.status).to.be.a("number");
        expect(dados.json.mensagem).to.be.a("string");
        expect(dados.json.vehicle).have.keys(
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
    it("deveria conter um objeto contendo um número uma string e um array", () => {
      return selectVehicle().then((dados) => {
        expect(dados).to.be.a("object");
        expect(dados.json.status).to.be.a("number");
        expect(dados.json.mensagem).to.be.a("string");
        expect(dados.json.vehicle).to.be.a("array");
      });
    });
  });

  describe("getById", () => {
    it("deveria conter um objeto contendo um número uma string e um objeto", () => {
      return selectByIdVehicle(exempleReq).then((dados) => {
        expect(dados.json).to.be.a("object");
        expect(dados.json.status).to.be.a("number");
        expect(dados.json.mensagem).to.be.a("string");
        expect(dados.json.vehicle).have.keys(
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

  describe("delete", () => {
    it("deveria conter um objeto contendo um número e uma string", () => {
      return deleteVehicle(exempleReq).then((dados) => {
        expect(dados.json).to.be.a("object");
        expect(dados.json.status).to.be.a("number");
        expect(dados.json.mensagem).to.be.a("string");
      });
    });
  });
});