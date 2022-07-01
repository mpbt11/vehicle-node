const { param, check } = require("express-validator");

const validateAdd = [
  check("placa", "O número de caractere deve ter no máximo 7!")
    .notEmpty()
    .isLength({ min: 1, max: 7 }),
  check("chassi", "O número de caractere deve ter no máximo 17!").isLength({
    min: 1,
    max: 17,
  }),
  check("renavam", "O número de caractere deve ter no máximo 11!").isLength({
    min: 1,
    max: 11,
  }),
  check("modelo", "O número de caractere deve ter no máximo 20!").isLength({
    min: 1,
    max: 20,
  }),
  check("marca", "O número de caractere deve ter no máximo 20!").isLength({
    min: 1,
    max: 20,
  }),
  check("ano", "O número de caractere deve ter no máximo 4!").isLength({
    min: 1,
    max: 4,
  }),
];

const validateUpdate = [
  param(
    "id_vehicles",
    "O código do veículo deve ter preenchido corretamente!"
  ).isInt(),
  check("placa", "O número de caractere deve ter no máximo 7!")
    .notEmpty()
    .isLength({ min: 1, max: 7 }),
  check("chassi", "O número de caractere deve ter no máximo 17!").isLength({
    min: 1,
    max: 17,
  }),
  check("renavam", "O número de caractere deve ter no máximo 11!").isLength({
    min: 1,
    max: 11,
  }),
  check("modelo", "O número de caractere deve ter no máximo 20!").isLength({
    min: 1,
    max: 20,
  }),
  check("marca", "O número de caractere deve ter no máximo 20!").isLength({
    min: 1,
    max: 20,
  }),
  check("ano", "O número de caractere deve ter no máximo 4!").isLength({
    min: 1,
    max: 4,
  }),
];

const validateSelectById = [
  param(
    "id_vehicles",
    "O código do veículo deve ser preenchido corretamente!"
  ).isInt(),
];

const validateDelete = [
  param(
    "id_vehicles",
    "O código do veículo deve ser preenchido corretamente!"
  ).isInt(),
];

module.exports = {
  validateAdd,
  validateUpdate,
  validateSelectById,
  validateDelete,
};
