const Locacao = require('../models/locacaoModel');


module.exports = class LocacaoController {



//ADICIONA REGISTROS-----------------------------------------------------------------------------
  static newLocacao(req, res) { //newUser, renderiza um formulário para criar um novo usuário.
    res.render('cadastroLocacao')
  }

  static async newLocacaoSave(req, res) { //newClienteSave, recebe uma requisição POST com os dados do usuário e os salva no banco de dados usando o modelo User. Se a operação de salvamento for bem-sucedida, o método redireciona o usuário para a página que exibe todos os usuários.
    const locacao = {
      nome: req.body.nome,
      cpf: req.body.cpf,
      marca: req.body.marca,
      modelo: req.body.modelo,
      ano: req.body.ano,
      valordiaria: req.body.valordiaria,
      idCliente: req.body.idCliente,
      idVeiculo: req.body.idVeiculo,
    }
    await Locacao.create(locacao)
      .then(() => {
      }).catch((error) => {
        console.log(error)
      })
    res.redirect('/view/locacao')


  
  //EXIBE OS REGISTROS
  }
  static async home(req, res) {//home, renderiza a página inicial da aplicação.
    res.render('viewLocacoes')
  }

  static async allLocacao(req, res) {//allUsers, recupera todos os usuários do banco de dados usando o modelo User e os renderiza em uma view.
    const locacao = await Locacao.findAll({ raw: true })
    res.render('viewLocacoes', { locacao })
  }


  //ATUALIZA REGISTROS------------------------------------------------------------------
  static async updateLocacao(req, res) {//updateUser, recupera um único usuário do banco de dados com base no ID fornecido, renderiza um formulário de edição e preenche o formulário com os dados do usuário.
    const locacao = await Locacao.findOne({ where: {'id': req.params.id}, raw: true })
    res.render('editarLocacao', { locacao })

  }

  static async updateLocacaoSave(req, res) {//updateUserSave, recebe uma requisição POST com dados de usuário atualizados, atualiza o usuário correspondente no banco de dados usando o modelo User e redireciona o usuário para a página que exibe todos os usuários.
    const id = req.params.id 
    const locacao = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        marca: req.body.marca,
        modelo: req.body.modelo,
        ano: req.body.ano,
        valordiaria: req.body.valordiaria,
    }
    await Locacao.update(locacao, { where: { id: id } })
      .then(res.redirect('/view/locacao'))
      .catch((err) => {
        console.log(err)
      })
  }

  //EXCLUI REGISTROS----------------------------------
  static async removeLocacao(req, res) { //removeUser, recebe uma requisição POST com o ID do usuário a ser removido, exclui o usuário correspondente do banco de dados usando o modelo User e redireciona o usuário para a página que exibe todos os usuários.
    await Locacao.destroy({where: {'id': req.params.id}})
      .then(res.redirect('/view/locacao'))
      .catch((err) => {
        console.log(err)
      })
  }


}
