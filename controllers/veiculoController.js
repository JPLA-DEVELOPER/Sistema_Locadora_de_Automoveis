const Veiculo = require('../models/veiculoModel');

module.exports = class VeiculoController {

  //ADICIONA REGISTROS-----------------------------------------------------------------------------
  static newVeiculo(req, res) { //newVeiculo, renderiza um formulário para criar um novo veículo.
    res.render('cadastroVeiculo')
  }

  static async newVeiculoSave(req, res) { //newVeiculoSave, recebe uma requisição POST com os dados do veículo e os salva no banco de dados usando o modelo Veiculo. Se a operação de salvamento for bem-sucedida, o método redireciona o usuário para a página que exibe todos os veículos.
    const veiculo = {
      marca: req.body.marca,
      modelo: req.body.modelo,
      ano: req.body.ano,
      cor:req.body.cor,
      preco: req.body.preco,
    }

    await Veiculo.create(veiculo)
      .then(() => {
      }).catch((error) => {
        console.log(error)
      })
    res.render('sucesso_cadastro')
  }


  //EXIBE OS REGISTROS
  static async home(req, res) {//home, renderiza a página inicial da aplicação.
    res.render('home')
  }

  static async allVeiculos(req, res) {//allVeiculos, recupera todos os veículos do banco de dados usando o modelo Veiculo e os renderiza em uma view.
    const veiculos = await Veiculo.findAll({ raw: true })
    res.render('home', { veiculos })
  }


  //ATUALIZA REGISTROS------------------------------------------------------------------
  static async updateVeiculo(req, res) {//updateVeiculo, recupera um único veículo do banco de dados com base no ID fornecido, renderiza um formulário de edição e preenche o formulário com os dados do veículo.
    const veiculo = await Veiculo.findOne({ where: {'id': req.params.id}, raw: true })
    res.render('editarVeiculo', { veiculo })
  }

  static async updateVeiculoSave(req, res) {//updateVeiculoSave, recebe uma requisição POST com dados de veículo atualizados, atualiza o veículo correspondente no banco de dados usando o modelo Veiculo e redireciona o usuário para a página que exibe todos os veículos.
    const id = req.params.id 
    const veiculo = {
      marca: req.body.marca,
      modelo: req.body.modelo,
      ano: req.body.ano,
      cor: req.body.cor,
      preco: req.body.preco,
    }
    await Veiculo.update(veiculo, { where: { id: id } })
      .then(res.render('sucesso_atualizar'))
      .catch((err) => {
        console.log(err)
      })
  }

  //EXCLUI REGISTROS----------------------------------
  static async removeVeiculo(req, res) { //removeVeiculo, recebe uma requisição POST com o ID do veículo a ser removido, exclui o veículo correspondente do banco de dados usando o modelo Veiculo e redireciona o usuário para a página que exibe todos os veículos.
    await Veiculo.destroy({where: {'id': req.params.id}})
      .then(res.render('sucesso_deletar'))
      .catch((err) => {
        console.log(err)
      })
  }

}
