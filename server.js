const express = require('express')
const app = express();

const hbs = require('hbs');

require('./hbs/helpers.js');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

///ESXPRESS HBS
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.render('index', {
        nombre: 'Jose Nah'
    });
});
app.get('/about', function(req, res) {
    res.render('about');
});

app.listen(port, () => {
    console.log(`escuchando el puerto ${port}`); ////cuando el server se levante se manda el callback 
})