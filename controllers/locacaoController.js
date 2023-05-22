const Locacao = require('../models/locacaoModel');
const Cliente = require('../models/clienteModel')
const Veiculo = require('../models/veiculoModel');

//CONVERTER DATA--------------------------------------
const handlebars = require('handlebars');
const moment = require('moment');

handlebars.registerHelper('moment', function(date, format) {
  return moment(date).format(format);
});
//------------------------------------------------------


module.exports = class LocacaoController {



//ADICIONA REGISTROS-----------------------------------------------------------------------------
  static newLocacao(req, res) { //newLocacao, renderiza um formulário para criar uma nova locação.
    
   res.render('./locacoes/cadastroLocacao')
  }

  static async newLocacaoSave(req, res) { //newLocacaoSave, recebe uma requisição POST com os dados do usuário e os salva no banco de dados usando o modelo Locacao. Se a operação de salvamento for bem-sucedida, o método redireciona o usuário para a página que exibe todas as locações.
    const locacao = {
      dataInicio: req.body.dataInicio,
      dataFim: req.body.dataFim,
      cpf: req.body.cpf,
      nome:req.body.nome,
      placa: req.body.placa,
      marca: req.body.marca,
      modelo: req.body.modelo,
      cor: req.body.cor,
      renavam:req.body.renavam,
      valorDiaria: req.body.valorDiaria,
      quantidadeDiarias: req.body.quantidadeDiarias,
      valorTotal: req.body.valorTotal


    



    
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
    const locacao = await Locacao.findAll({ raw: true })
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
      cpf: req.body.cpf,
      nome:req.body.nome,
      placa: req.body.placa,
      marca: req.body.marca,
      modelo: req.body.modelo,
      cor: req.body.cor,
      renavam:req.body.renavam,
      valorDiaria: req.body.valorDiaria,
      quantidadeDiarias: req.body.quantidadeDiarias,
      valorTotal: req.body.valorTotal,
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


   //DETALHES REGISTROS------------------------------------------------------------------
   static async detalhesLocacao(req, res) {//updateLocacao, recupera uma única locacao do banco de dados com base no ID fornecido, renderiza um formulário de edição e preenche o formulário com os dados da locacão.
    const locacao = await Locacao.findOne({ where: {'idLocacao': req.params.idLocacao}, raw: true })
    res.render('./locacoes/detalhesLocacao', { locacao })
  
  }




  //BUSCAR CLIENTE PELO CPF
  static async buscarCliente(req, res) {
    const cpf = req.params.cpf;
  
    try {
      const cliente = await Cliente.findOne({
        where: { cpf },
        attributes: ['idCliente', 'nome'] // Atributos a serem retornados na resposta
      });
  
      res.json(cliente);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar cliente.' });
    }
  }
  
//BUSCAR VEICULO PELA PLACA
  static async buscarVeiculo(req, res) {
    const placa = req.params.placa;
  
    try {
      const veiculo = await Veiculo.findOne({
        where: { placa },
        attributes: ['idVeiculo', 'marca', 'modelo', 'cor', 'renavam', 'valordiaria'] // Atributos a serem retornados na resposta
      });
  
      res.json(veiculo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar veículo.' });
    }
  }
  

  



  
  


}
