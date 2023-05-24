const Usuario = require('../models/usuarioModel');


module.exports = class UsuarioController {



//ADICIONA REGISTROS-----------------------------------------------------------------------------
  static newUsuario(req, res) { //newUser, renderiza um formulário para criar um novo usuário.
    res.render('./usuarios/cadastroUsuario')
  }

  static async newUsuarioSave(req, res) { //newUserSave, recebe uma requisição POST com os dados do usuário e os salva no banco de dados usando o modelo User. Se a operação de salvamento for bem-sucedida, o método redireciona o usuário para a página que exibe todos os usuários.
    const usuario = {
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha,
    }
    await Usuario.create(usuario)
      .then(() => {
      }).catch((error) => {
        console.log(error)
      })
    res.render('./usuarios/sucesso_cadastro_usuario')



  
  }
  ///static async home(req, res) {//home, renderiza a página inicial da aplicação.

  //  res.render('home')
  //}


  
  static async viewUsuario(req, res) {
    res.render('./usuarios/viewUsuario');
  }

  //
  

  static async home(req, res) {
  
    res.render('home');
  }

  
  
  

  static async allUsuario(req, res) {//allUsers, recupera todos os usuários do banco de dados usando o modelo User e os renderiza em uma view.
    const usuario = await Usuario.findAll({ raw: true })
    res.render('home', { usuario })
  }


  //ATUALIZA REGISTROS------------------------------------------------------------------
  static async updateUsuario(req, res) {//updateUser, recupera um único usuário do banco de dados com base no ID fornecido, renderiza um formulário de edição e preenche o formulário com os dados do usuário.
    const id = req.params.id
    const usuario = await Usuario.findOne({ where: { id: id }, raw: true })
    res.render('users/edit', { usuario })

  }

  static async updateUsuarioSave(req, res) {//updateUserSave, recebe uma requisição POST com dados de usuário atualizados, atualiza o usuário correspondente no banco de dados usando o modelo User e redireciona o usuário para a página que exibe todos os usuários.
    const id = req.body.id
    const usuario = {
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha,
    }
    await Usuario.update(usuario, { where: { id: id } })
      .then(res.render('sucesso_atualizar_usuario'))
      .catch((err) => {
        console.log(err)
      })
  }
  

  //EXCLUI REGISTROS----------------------------------
  static async removeUsuario(req, res) { //removeUser, recebe uma requisição POST com o ID do usuário a ser removido, exclui o usuário correspondente do banco de dados usando o modelo User e redireciona o usuário para a página que exibe todos os usuários.
    const id = req.body.id
    await Usuario.destroy({ where: { id: id } })
      .then(res.render('sucesso_deletar_usuario'))
      .catch((err) => {
        console.log(err)
      })
  }

  // LOGIN--------------------------------------------------------------
static renderLogin(req, res) {
  res.render('./usuarios/login');
}

static async login_post(req, res){
  const {email, senha} = req.body;
  const user = await Usuario.findOne({where:{email, senha}});
  if(!user){
    console.log("Usuario não encontrado")
    res.redirect('/')
  }else{
    req.session.user = { email: email, senha: senha};
    console.log("Usuario encontrado")
    res.redirect('/home')
  }
  console.log(email, senha)
}




// LOGOUT
static logout(req, res) {
  req.session.destroy(() => {
    res.redirect('/');
  });
}

  


}
