const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const sequelize = require('./database/connection')

//LOGIN -------------------------------------------------
const session = require('express-session')//SESSÕES

///SESSÃO
app.use(session({
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: true
  }));


//------------------------------------------------------
// Importando rotas
const veiculoRotas = require('./routes/veiculoRotas')
const usuarioRotas = require('./routes/usuarioRotas')
const clienteRotas = require('./routes/clienteRotas')
const locacaoRotas = require('./routes/locacaoRotas')



//TEMPLATE ENGINE
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars') 


// Configurando Body Parser para receber dados de formulário
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configurando pasta public para servir arquivos estáticos
app.use(express.static('public'));

// Configurando rotas
app.use('/', veiculoRotas)
app.use('/', usuarioRotas)
app.use('/', clienteRotas)
app.use('/', locacaoRotas)

// Sincronizando com o banco de dados e iniciando servidor
sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log("Servidor rodando na URL http://localhost:3000");
    });
}).catch(err => {
    console.log(err);
});
