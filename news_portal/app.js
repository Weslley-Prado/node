var app = require('./config/server');

var rotaNoticias = require('./app/routes/news')(app);

var rotaHome = require('./app/routes/home')(app);

var rotaFormInclusaoNoticia = require('./app/routes/form_include_news')(app);

app.listen(3003, function(){
    console.log("Servidor ON");
});