const path = require('path');
// const morgan = require('morgan');
const express = require('express');
const hbs = require("express-handlebars");

// const hbs = require('hbs')
const app = express();
const route = require('./routes');
const port = 3000;


app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
// app.use(morgan('combined'));
app.use(express.static(path.join('./src','public')));
// app.use(express.static(path.join('public')));
//Template engine
app.engine("hbs", hbs.engine({
    extname: '.hbs',
}));
app.set("view engine", "hbs");

// hbs.registerPartials(__dirname + '/views/partials');
app.set("views", path.join(__dirname, "resources", "views"));
// app.set('views', path.join(__dirname, 'resources\\views'));
// app.set('views', path.join('./src','resources/views'));

// app.get('/home', (req, res) => {
//     res.render('home.hbs');
// })


//routes init
route(app);

    // app.get('/', (req, res) => {
    //     // res.send('Hello World!');
    //     res.render('home',{layout: 'main'});
    //     // res.render('home'); //defaut
    // })

    // app.get('/search', (req, res) => {
    //     res.render('search',{layout: 'main'});
    // })

    // // const NewsController = require('./app/controllers');
    // // app.get('/news', (req, res) => {
    // //     res.render('news',{layout: 'main'});
    // // })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})