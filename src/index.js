const path = require('path');
// const morgan = require('morgan');
const express = require('express');
const handlebars = require("express-handlebars");

// const hbs = require('hbs')
const app = express();

const port = 3000;

// app.use(morgan('combined'));

//template engine
// app.engine('handlebars',hbs.engine({
//     extname: '.hbs' 
// }));
// app.set('view engine','hbs');

//Template engine
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

// app.set("views", path.join(__dirname, "resources", "views"));
app.set('views', path.join(__dirname, 'resources\\views'));
// app.set('views', path.join('./src','resources/views'));

// app.get('/home', (req, res) => {
//     res.render('home.hbs');
// })

app.get('/', (req, res) => {
    // res.send('Hello World!');
    res.render('home');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})