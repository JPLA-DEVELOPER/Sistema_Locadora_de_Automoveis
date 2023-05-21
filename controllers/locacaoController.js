const Locacao = require('../models/locacaoModel');
const Cliente = require('../models/clienteModel');
const Veiculo = require('../models/veiculoModel')

let cliente
let veiculo

module.exports = class LocacaoController {



//ADICIONA REGISTROS-----------------------------------------------------------------------------
  static newLocacao(req, res) { //newLocacao, renderiza um formulário para criar uma nova locação.
        
    res.render('./locacoes/cadastroLocacao')
  }

  static async newLocacaoSave(req, res) { //newLocacaoSave, recebe uma requisição POST com os dados do usuário e os salva no banco de dados usando o modelo Locacao. Se a operação de salvamento for bem-sucedida, o método redireciona o usuário para a página que exibe todas as locações.
    const locacao = {
      dataInicio: req.body.dataInicio,
      dataFim: req.body.dataFim,
      idCliente: cliente.idCliente,
      idVeiculo: veiculo.idVeiculo

    
    }
    await Locacao.create(locacao)
      .then(() => {
      }).catch((error) => {
        console.log(error)
      })
      res.render('./locacoes/sucesso_cadastro_locacao')


  
  //EXIBE OS REGISTROS
  }
  static async home(req, res) {//home, renderiza a página inicial da aplicação.
    res.render('./locacoes/viewLocacoes')
  }

  static async allLocacao(req, res) {//allLocacao, recupera todos os locacões do banco de dados usando o modelo Locacao e os renderiza em uma view.
    const locacao = await Locacao.findAll({raw:true, nest:true, include: [{
      association: 'Cliente'
    }, {association: 'Veiculo'}] })
  console.log(locacao)
    res.render('./locacoes/viewLocacoes', { locacao })
  }


  //ATUALIZA REGISTROS------------------------------------------------------------------
  static async updateLocacao(req, res) {//updateLocacao, recupera uma única locacao do banco de dados com base no ID fornecido, renderiza um formulário de edição e preenche o formulário com os dados da locacão.
    const locacao = await Locacao.findOne({ where: {'idLocacao': req.params.idLocacao}, raw: true })
    res.render('./locacoes/editarLocacao', { locacao })

  }

  static async updateLocacaoSave(req, res) {//updateLocacaoSave, recebe uma requisição POST com dados de uma locacão atualizados, atualiza o usuário correspondente no banco de dados usando o modelo Locacao e redireciona o usuário para a página que exibe todos as locações.
    const idLocacao = req.params.idLocacao 
    const locacao = {
      dataInicio: req.body.dataInicio,
      dataFim: req.body.dataFim,
    }
    await Locacao.update(locacao, { where: { idLocacao: idLocacao } })
      .then(res.render('./locacoes/sucesso_atualizar_locacao'))
      .catch((err) => {
        console.log(err)
      })
  }

  //EXCLUI REGISTROS----------------------------------
  static async removeLocacao(req, res) { //removeLocacao, recebe uma requisição POST com o Id da locação a ser removida, exclui a  locação correspondente do banco de dados usando o modelo Locacao e redireciona o usuário para a página que exibe todos as locacões.
    await Locacao.destroy({where: {'idLocacao': req.params.idLocacao}})
      .then(res.render('./locacoes/sucesso_deletar_locacao'))
      .catch((err) => {
        console.log(err)
      })
  }

   //BUSCA REGISTROS----------------------------------
   static async buscaCliente(req, res) { //removeUser, recebe uma requisição POST com o ID do usuário a ser removido, exclui o usuário correspondente do banco de dados usando o modelo User e redireciona o usuário para a página que exibe todos os usuários.
    try {
      const _cliente = await Cliente.findOne({ where: { 'cpf': req.body.cpf }, raw: true })
      cliente = _cliente

    } catch (err){
      console.log(err)
    }

 }

  //BUSCA REGISTROS----------------------------------
  static async buscaVeiculo(req, res) { //removeUser, recebe uma requisição POST com o ID do usuário a ser removido, exclui o usuário correspondente do banco de dados usando o modelo User e redireciona o usuário para a página que exibe todos os usuários.
    try {
      const _veiculo = await Veiculo.findOne({ where: { 'placa': req.body.placa }, raw: true })
      veiculo = _veiculo

    } catch (err){
      console.log(err)
    }

 }

}
