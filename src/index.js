const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes');
const mongoDB =
    'mongodb+srv://thienbinh:<thienbinh>@cluster0.4418l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const db = require('mongodb');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded());
app.use(express.json());

//Http logger
app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(       app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
