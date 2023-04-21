const path = require('path');
// const morgan = require('morgan');
const express = require('express');
const hbs = require('express-handlebars');

const app = express();
const methodOverride = require('method-override')//https://www.youtube.com/watch?v=HdVOT7Neh18&list=PL_-VfJajZj0VatBpaXkEHK_UPHL7dW6I3&index=28 //28:00

const route = require('./routes');
const db = require('./config/db');

const port = 3000;

db.connect();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(methodOverride('_method'));

// app.use(morgan('combined'));
app.use(express.static(path.join('./src','public')));
// app.use(express.static(path.join('public')));
//Template engine
app.engine("hbs", hbs.engine({
    extname: '.hbs',
    helpers: {
        sum: (a,b) => a+b,
    }
}));
app.set("view engine", "hbs");

// hbs.registerPartials(__dirname + '/views/partials');
app.set("views", path.join(__dirname, 'resources', 'views'));
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
    console.log(`App listening on port ${port}`);
})