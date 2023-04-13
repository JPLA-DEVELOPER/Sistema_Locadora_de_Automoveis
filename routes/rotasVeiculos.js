const express = require('express')
const router = express.Router() //importa o recurso router do express e atribue a constante router.
const Veiculos = require('../models/cadastro');

//CRIANDO ROTAS: -----------------------------------------------------------------------
//Rota principal

router.get('/', function(req, res){
    Veiculos.findAll().then(function(veiculos){ //puxa todos os dados na tabela do bd
         res.render('home', {veiculos: veiculos})
        
     }) 
 })
 
 
 
 //ROTA PARA DELETAR UM REGISTRO DA TABELA
router.get('/deletar/:id', function(req, res){
     Veiculos.destroy({where: {'id': req.params.id}}).then(function(){ //condição que deleta os registros pelo id.
         //res.send("Postagem deletada com sucesso!")
         res.render('sucesso_deletar')
     }).catch(function(erro){
         res.send("esta mensagem não existe")
     })
 })
 
 
 // ROTAS PARA EDITAR UM REGISTRO DA TABELA (GET E POST)
 router.get('/editar/:id', function(req, res){//PEGA OS DADOS DO FORMULÁRIO
     Veiculos.findByPk(req.params.id).then(function(veiculo){ //encontra o registro correspondente ao id passado na URL
         res.render('editar', {veiculo: veiculo}) //renderiza a página de edição com as informações do veículo
     }).catch(function(erro){
         res.send("Veículo não encontrado!")
     })
 })
 
 
 router.post('/editar/:id', function(req, res){ //SALVA NO BD
     Veiculos.update({
         modelo: req.body.modelo,
         ano: req.body.ano
     }, {
         where: { id: req.params.id }
     }).then(function(){
         res.render('sucesso_atualizar') //renderiza a página de sucesso após atualizar o registro
     }).catch(function(erro){
         res.send("Erro ao atualizar o veículo: " + erro)
     })
 })
 
 
 
 
 
 
 //ROTA PARA CADASTRO
 router.get('/cadastro', function(req, res){ //nome da rota
   
     res.render('formulario') //renderiza o arquivo .handlebars correspondente a rota desejada.
 })
 
 //CRIA ROTA POST COM OS DADOS DO FORMULÁRIO
 router.post('/cadastro', function(req, res){//Recebe os dados do formulario
     Veiculos.create({
         modelo:  req.body.modelo,
         ano: req.body.ano,  //pega o dado fornecido no campo do formulario html de nome modelo(BodyParser).
         fabricante: req.body.fabricante,
         placa: req.body.placa,
         renavam: req.body.renavam
     }).then(function(){
     //res.send("veículo cadastrado com sucesso!")
     res.render('sucesso_cadastro') //renderiza a pagina
     }).catch(function(erro){
     res.send("Erro no cadastro!"+ erro)
     })
 
 })
 
 
 
 //CRIANDO UMA NOVA ROTA COM HANDLEBARS PARA O ARQUIVO 404.HANDLEBARS QUE É UMA PAGINA PARA UM ENDEREÇO NÃO EXISTENTE
 router.use((req, res) => {
     res.status(404).render('404')
   });


   
//-----------------------------------------------------------------------------------------------------
//Rota para a págian sobre
//app.get("/sobre", function(req, resp){ 
//    resp.send("sobre nós!")//Mensagem a ser exibida se o usuário pegar essa rota. Pode fazer diversas coisas com essa rota, não só exibir mensagens.
//})

//Rota para a págian blog
//app.get("/blog", function(req, resp){
//    resp.send("Blog!")
//})

//ROTAS DINÂMICAS USANDO PARÂMETROS
//app.get("/:nome/:idade/:sexo", function(req, resp){ //consegue pegar os valores digitados na barra de endereços 
 //   resp.send("<h2> Seu nome é"+ req.params.nome + "</h2>" + "<h2> Sua idade é"+ req.params.idade + "</h2>" + "<h2> Seu sexo é"+ req.params.sexo + "</h2>")
//})



//ROTAS PARA ARQUIVOS HTML
//app.get("/index", function(req, resp){
//    resp.sendFile(__dirname + "/html/index.html")//__dirname indica que é o diretório principal do projeto. isso é concatenado com a pasta e o noem do arquivo.
//})
//---------------------------------------------------------------------------------------------------------------------


   module.exports = router //exporta as rotas para serem usadas pelo index.js