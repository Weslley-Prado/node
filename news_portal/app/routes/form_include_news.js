module.exports = function(app){
    app.get('/form_include_news', function(req,res){
        res.render('admin/form_add_noticia');
    });
}