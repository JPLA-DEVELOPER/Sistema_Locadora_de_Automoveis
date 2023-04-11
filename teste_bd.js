const Sequelize = require('sequelize')
const sequelize = new Sequelize('veiculos---', 'root', '', { //nome do banco, usuário e senha.
    host: "localhost", //maquina onde está rodando o mysql(localhost)
    dialect:'mysql' //Tipo de banco que está conectado.
})  


 //verifica a conecção com o bd.
sequelize.authenticate().then(function(){//Caso a função sequelize.autenticate retorne true, a função then é chamada, casocontrario afunção catch que é chamada.
    console.log("Conectado ao banco com sucesso!")
    
}).catch(function(erro){
    console.log("Falha ao se conectar:" + erro)
})
    
//----------------------------------------------------------------------------------------------------



//MODELS PERMITEM CRIAR TABELAS DO BD DIRETAMENTE NO NODE
const Veiculos = sequelize.define('veiculos_cadastrados', { //define que o nome da tabela será veiculos_cadastrados.
    modelo:{ //nome da coluna
        type:Sequelize.STRING //tipo 
    },
    fabricante:{ //nome
        type: Sequelize.STRING //tipo
    },
     ano:{ //nome
        type: Sequelize.INTEGER //tipo
    },
    placa:{ //nome
        type: Sequelize.STRING //tipo
    }
})


//Veiculos.sync({force:true}) //Sincroniza o model com o mysl e gera a tabela no banco. Só executa uma vez.

//INSERIR DADOS NO BANCO
Veiculos.create({ //nome do model que criou a tabela
    modelo: "Fusca", //coluna e valor a ser inserido
    fabricante: "Volkwagem",
    ano: 1978,
    placa: "PMB3789"
})




//----------------------------------------------------------------------------------------------


