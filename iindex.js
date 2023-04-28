const express = require('express')//importando o módulo express
const app = express();
const handlebars = require('express-handlebars')//instala o handlebars
const bodyParser = require('body-parser')
const partials = require('express-handlebars') //importa o partials
const Veiculos = require('./routes/rotasVeiculos')//importa o arquivo de rotas



//PARTIALS - PERMITEM REUTILIZAR COMPONENTES
const hbs = partials.create({
   partialsDir: ["views/partials"]
})

//TEMPLATE ENGINE
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars') 

//BODY PARSER----------------------------------------------------------------------
//recebe dados de qualquer formulário.
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//ADICIONANDO CSS
app.use(express.static('public'))






//hbs.registerPartials(__dirname + '/views/partials')

//ROTA PALTIALS
//app.get('/', (req, res, next) => {
 //   res.render('patialsveiculos') ///renderiza o arquivo partials
 // })


//ADICIONANDO AS ROTAS CRIADAS NA PASTA ROUTER:----------------------------------------
app.use('/', Veiculos)
app.use('/cadastro', Veiculos)
app.use('/deletar/:id', Veiculos)
app.use('/editar/:id', Veiculos)
app.use('/dados', Veiculos)




//PORTA DO SERVIDOR
app.listen(3000, function(){
    console.log("Servidor rodando na URL http://localhost:3000")
})
