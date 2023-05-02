const Cliente = require('../models/clienteModel');


module.exports = class ClienteController {



//ADICIONA REGISTROS-----------------------------------------------------------------------------
  static newCliente(req, res) { //newUser, renderiza um formulário para criar um novo usuário.
    res.render('cadastroCliente')
  }

  static async newClienteSave(req, res) { //newClienteSave, recebe uma requisição POST com os dados do usuário e os salva no banco de dados usando o modelo User. Se a operação de salvamento for bem-sucedida, o método redireciona o usuário para a página que exibe todos os usuários.
    const cliente = {
      nome: req.body.nome,
      cpf: req.body.cpf,
      email: req.body.email,
      telefone: req.body.telefone,
      endereco: req.body.endereco,
    }
    await Cliente.create(cliente)
      .then(() => {
      }).catch((error) => {
        console.log(error)
      })
    res.redirect('/view/clientes')


  
  //EXIBE OS REGISTROS
  }
  static async home(req, res) {//home, renderiza a página inicial da aplicação.
    res.render('viewClientes')
  }

  static async allCliente(req, res) {//allUsers, recupera todos os usuários do banco de dados usando o modelo User e os renderiza em uma view.
    const cliente = await Cliente.findAll({ raw: true })
    res.render('viewClientes', { cliente })
  }


  //ATUALIZA REGISTROS------------------------------------------------------------------
  static async updateCliente(req, res) {//updateUser, recupera um único usuário do banco de dados com base no ID fornecido, renderiza um formulário de edição e preenche o formulário com os dados do usuário.
    const cliente = await Cliente.findOne({ where: {'id': req.params.id}, raw: true })
    res.render('editarCliente', { cliente })

  }

  static async updateClienteSave(req, res) {//updateUserSave, recebe uma requisição POST com dados de usuário atualizados, atualiza o usuário correspondente no banco de dados usando o modelo User e redireciona o usuário para a página que exibe todos os usuários.
    const id = req.params.id 
    const cliente = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        email: req.body.email,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
    }
    await Cliente.update(cliente, { where: { id: id } })
      .then(res.redirect('/view/clientes'))
      .catch((err) => {
        console.log(err)
      })
  }

  //EXCLUI REGISTROS----------------------------------
  static async removeCliente(req, res) { //removeUser, recebe uma requisição POST com o ID do usuário a ser removido, exclui o usuário correspondente do banco de dados usando o modelo User e redireciona o usuário para a página que exibe todos os usuários.
    await Cliente.destroy({where: {'id': req.params.id}})
      .then(res.redirect('/view/clientes'))
      .catch((err) => {
        console.log(err)
      })
  }


}
