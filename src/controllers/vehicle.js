const { validationResult } = require("express-validator"),
  {
    validateAdd,
    validateUpdate,
    validateSelectById,
    validateDelete,
  } = require("../services/validation"),
  {
    addVehicle,
    updateVehicle,
    selectVehicle,
    selectByIdVehicle,
    deleteVehicle,
  } = require("../services/service"),
  {
    createFormAdd,
    createFormUpdate,
    createFormSelectById,
    createFormDelete,
  } = require("../services/formatting");

module.exports = (app) => {
  app.post("/", validateAdd, async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).send({ errors: error.array() });
    } else {
      const response = await addVehicle(createFormAdd(req));

      return res.send(response);
    }
  });

  app.put("/:id_vehicles", validateUpdate, async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).send({ errors: error.array() });
    } else {
      const response = await updateVehicle(createFormUpdate(req));

      return res.send(response);
    }
  });

  app.get("/:id_vehicles", validateSelectById, async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).send({ errors: error.array() });
    } else {
      const response = await selectByIdVehicle(createFormSelectById(req));

      return res.send(response);
    }
  });

  app.get("/", async (req, res) => {
    const response = await selectVehicle();

    return res.send(response);
  });

  app.delete("/:id_vehicles", validateDelete, async (req, res) => {
    const response = await deleteVehicle(createFormDelete(req));

    return res.send(response);
  });
};
