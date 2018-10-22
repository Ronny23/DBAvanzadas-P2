const Funcionario = require('../models/funcionarios');

const funcionarioCtrl = {};

funcionarioCtrl.getFuncionarios = async (req, res, next) => {
    const funcionarios = await Funcionario.find();
    res.json(funcionarios);
};

funcionarioCtrl.createFuncionario = async (req, res, next) => {
    const funcionario = new Funcionario({
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        fechaIngreso: req.body.fechaIngreso,
        area: req.body.area,
    });
    await funcionario.save();
    res.json({status: 'Funcionario created'});
};

funcionarioCtrl.getFuncionario = async (req, res, next) => {
    const { id } = req.params;
    const funcionario = await Funcionario.findById(id);
    res.json(funcionario);
};

funcionarioCtrl.editFuncionario = async (req, res, next) => {
    const { id } = req.params;
    const funcionario = {
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        fechaIngreso: req.body.fechaIngreso,
        area: req.body.area,
    };
    await Funcionario.findByIdAndUpdate(id, {$set: funcionario}, {new: true});
    res.json({status: 'Funcionario Updated'});
};

funcionarioCtrl.deleteFuncionario = async (req, res, next) => {
    await Funcionario.findByIdAndRemove(req.params.id);
    res.json({status: 'Funcionario Deleted'});
};


module.exports = funcionarioCtrl;