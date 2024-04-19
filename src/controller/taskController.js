const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeTask(request, response){

    const params = Array(
        request.body.nome,
        request.body.email
    );

    const query = 'INSERT INTO newsletter(nome, email) VALUES(?,?)';

    connection.query(query, params, (err, results) => {
        if(results){
            response
            .status(201)
            .json({
                success: true,
                message: 'sucesso',
                data: results
            })
        }else{
            response
            .status(400)
            .json({
                success: false,
                message: 'erro',
                sql: err
            })
        }
    })
}

module.exports = {
    storeTask
}