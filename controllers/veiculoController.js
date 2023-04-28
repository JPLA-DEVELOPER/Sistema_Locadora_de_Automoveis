const Veiculo = require('../models/veiculoModel');

exports.getAll = async (req, res) => {
  try {
    const veiculos = await Veiculo.findAll();
    res.render('home', { veiculos });
  } catch (error) {
    console.log(error);
  }
};

exports.getOne = async (req, res) => {
  try {
    const veiculo = await Veiculo.findByPk(req.params.id);
    res.render('veiculo', { veiculo });
  } catch (error) {
    console.log(error);
  }
};

exports.create = async (req, res) => {
  try {
    await Veiculo.create({
      marca: req.body.marca,
      modelo: req.body.modelo,
      ano: req.body.ano,
      cor: req.body.cor,
      preco: req.body.preco
    });
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
};

exports.update = async (req, res) => {
  try {
    await Veiculo.update({
      marca: req.body.marca,
      modelo: req.body.modelo,
      ano: req.body.ano,
      cor: req.body.cor,
      preco: req.body.preco
    },
    {
      where: {
        id: req.params.id
      }
    });
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
};

exports.delete = async (req, res) => {
  try {
    await Veiculo.destroy({
      where: {
        id: req.params.id
      }
    });
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
};
