const Locacao = require('../models/locacaoModel');


module.exports = class LocacaoController {



//ADICIONA REGISTROS-----------------------------------------------------------------------------
  static newLocacao(req, res) { //newLocacao, renderiza um formulário para criar uma nova locação.
        
    res.render('cadastroLocacao')
  }

  static async newLocacaoSave(req, res) { //newLocacaoSave, recebe uma requisição POST com os dados do usuário e os salva no banco de dados usando o modelo Locacao. Se a operação de salvamento for bem-sucedida, o método redireciona o usuário para a página que exibe todas as locações.
    const locacao = {
      dataInicio: req.body.dataInicio,
      dataFim: req.body.dataFim,

    
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

  static async allLocacao(req, res) {//allLocacao, recupera todos os locacões do banco de dados usando o modelo Locacao e os renderiza em uma view.
    const locacao = await Locacao.findAll({ raw: true })
    res.render('viewLocacoes', { locacao })
  }


  //ATUALIZA REGISTROS------------------------------------------------------------------
  static async updateLocacao(req, res) {//updateLocacao, recupera uma única locacao do banco de dados com base no ID fornecido, renderiza um formulário de edição e preenche o formulário com os dados da locacão.
    const locacao = await Locacao.findOne({ where: {'id': req.params.id}, raw: true })
    res.render('editarLocacao', { locacao })

  }

  static async updateLocacaoSave(req, res) {//updateLocacaoSave, recebe uma requisição POST com dados de uma locacão atualizados, atualiza o usuário correspondente no banco de dados usando o modelo Locacao e redireciona o usuário para a página que exibe todos as locações.
    const id = req.params.id 
    const locacao = {
      dataInicio: req.body.dataInicio,
      dataFim: req.body.dataFim,
    }
    await Locacao.update(locacao, { where: { id: id } })
      .then(res.redirect('/view/locacao'))
      .catch((err) => {
        console.log(err)
      })
  }

  //EXCLUI REGISTROS----------------------------------
  static async removeLocacao(req, res) { //removeLocacao, recebe uma requisição POST com o Id da locação a ser removida, exclui a  locação correspondente do banco de dados usando o modelo Locacao e redireciona o usuário para a página que exibe todos as locacões.
    await Locacao.destroy({where: {'id': req.params.id}})
      .then(res.redirect('/view/locacao'))
      .catch((err) => {
        console.log(err)
      })
  }


}
