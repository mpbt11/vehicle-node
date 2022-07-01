exports.createFormAdd = ({
    body: {
        placa,
        chassi,
        renavam,
        modelo,
        marca,
        ano
    }
}) =>  {
    return {
        placa,
        chassi,
        renavam,
        modelo,
        marca,
        ano
    }
};

exports.createFormUpdate = ({
    params: { id_vehicles },
    body: {
        placa,
        chassi,
        renavam,
        modelo,
        marca,
        ano
    }
}) =>  {
    return {
        id_vehicles,
        placa,
        chassi,
        renavam,
        modelo,
        marca,
        ano
    }
};

exports.createFormSelectById = ({
    params: { id_vehicles }
}) =>  {
    return { id_vehicles }
};

exports.createFormDelete = ({
    params: { id_vehicles }
}) =>  {
    return { id_vehicles }
};