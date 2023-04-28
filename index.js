const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const sequelize = require('./database/connection')

// Importando rotas
const veiculoRotas = require('./routes/veiculoRotas');

// Configurando Handlebars como template engine
//app.engine('handlebars', handlebars({
 //   defaultLayout: 'main',
 //   runtimeOptions: {
 //       allowProtoPropertiesByDefault: true,
 //       allowProtoMethodsByDefault: true,
 //   },
//}));
//app.set('view engine', 'handlebars');

//TEMPLATE ENGINE
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars') 


// Configurando Body Parser para receber dados de formulário
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configurando pasta public para servir arquivos estáticos
app.use(express.static('public'));

// Configurando rotas
app.use('/', veiculoRotas);

// Sincronizando com o banco de dados e iniciando servidor
sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log("Servidor rodando na URL http://localhost:3000");
    });
}).catch(err => {
    console.log(err);
});
