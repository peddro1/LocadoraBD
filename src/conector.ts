
const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost', // O host do banco. Ex: localhost
    user: 'teste', // Um usuário do banco. Ex: user 
    password: '123456', // A senha do usuário. Ex: user123
    database: 'locadora' // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
   
});

con.connect((err) => {
    if (err) {
        console.log('Erro connecting to database...', err)
        return
    }
    console.log('Connection established!')
})

function retornaCliente(){
    const [clientes] = con.query('SELECT * FROM clientes;')
    return clientes

}

module.exports = {
    retornaCliente
}
/*
con.end((err) => {
    if(err) {
        console.log('Erro to finish connection...', err)
        return 
    }
    console.log('The connection was finish...')
})
/*
async function connect(){

    if( global.connection && global.connection.state !== "disconnected"){
        return global.connection
    }
    const mysql = require("mysql2/promise")
    const connection = await mysql.createConnection("mysql://root:123456@localhost:3306/locadora") 
    console.log("conectou mysql")
    global.connection = connection
    return connection
}

export async function selectVendas(){
    const con = await connect();
    const [rows] = await con.query("SELECT * FROM clientes;")
    return rows;

}

export async function chama() {
    const vendas = await selectVendas()
    //vendas.map(Nome)
    for(const i in vendas){
        console.log(vendas[i].Cliente)

    }
    
}

*/
