module.exports = function(app){
    app.get('/news', function(req,res){

        var mysql = require('mysql');

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'portal_noticias'
        });

        connection.query("SELECT * FROM noticias", function(error, result){
            res.render('noticias/news', { noticias : result });
        });
    });
}