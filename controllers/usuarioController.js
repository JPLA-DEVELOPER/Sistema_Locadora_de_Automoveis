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
     // res.render('sucesso_cadastro_usuario')



  
  }
  ///static async home(req, res) {//home, renderiza a página inicial da aplicação.

  //  res.render('home')
  //}

  static async home(req, res) {
    const id = req.session.id;
    const usuarioLogado = await Usuario.findOne({ where: { id: id } });
    res.render('home', { usuarioLogado });
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

static async processLogin(req, res) {
  //const { email, senha } = req.body;

  const email = req.body.email;
  const senha = req.body.senha;

  const usuario = await Usuario.findOne({ where: { email: email } });
  if (usuario && usuario.senha === senha) {
    req.session.loggedIn = true;
    req.session.usuarioId = usuario.id; // Salvar o ID do usuário na sessão (opcional)
    req.session.nomeUsuario = usuario.nome; // Armazena o nome do usuário na sessão

    //const userId = req.session.userId;
   // const usuarioLogado = await Usuario.findOne({ where: { id: userId } });
    //res.render('home', { usuario: usuarioLogado });
    //res.render('home', { usuario: nomeUsuario });

    const nomeUsuario = req.session.nomeUsuario; // Obtém o nome do usuário da sessão
    res.render('home', { nomeUsuario });
    
 
  } else {
    res.send('Credenciais inválidas!')
  }
}

// LOGOUT
static logout(req, res) {
  req.session.destroy(() => {
    res.redirect('/');
  });
}

  


}
