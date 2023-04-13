const Sequelize = require('sequelize')
const sequelize = new Sequelize('veiculos', 'root', '', { //nome do banco, usuário e senha.
    host: "localhost", //maquina onde está rodando o mysql(localhost)
    dialect:'mysql', //Tipo de banco que está conectado.
    query:{raw:true}
})

 //verifica a conecção com o bd.
 sequelize.authenticate().then(function(){//Caso a função sequelize.autenticate retorne true, a função then é chamada, casocontrario afunção catch que é chamada.
    console.log("Conectado ao banco com sucesso!")
    
}).catch(function(erro){
    console.log("Falha ao se conectar:" + erro)
})
    



//----------------------------------------------------------------------------------------------------
//EXPORTAR OS MÓDULOS SEQUELIZE
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
