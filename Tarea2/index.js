const express = require("express");
const {engine} = require("express-handlebars");
const app = express();
const axios = require("axios");
const newsApi = require('newsapi');
const apiKey = '2c3ae9520d7d412d92fc91a2f4a5fc19';

app.engine('hbs', engine({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    // defaultLayout: 'cards',
    partialsDir: __dirname + '/views/partials/',
}));

app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', async (req, res) => {
    let queryParams = req.query.new;
    if(queryParams === undefined || queryParams == ''){
        res.render('index');
    }
    let news = `http://newsapi.org/v2/everything?q=${queryParams}&apiKey=${apiKey}`;
    let data = await axios.get(news);
    data = data.data.articles;
    
    res.render('index', {data: data, queryParams: queryParams});

});


app.use(express.static(__dirname + '/style'));

app.listen(3000, () => {
    console.log('app is running in port 3000');
});