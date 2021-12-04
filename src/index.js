const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db');
const methodOverride = require('method-override');


// connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/courses/create', express.static(path.join(__dirname, 'public')));
app.use('/me/stored/courses', express.static(path.join(__dirname, 'public')));
app.use('/courses', express.static(path.join(__dirname, 'public')));
app.use('/courses/:id/edit', express.static(path.join(__dirname, 'public')));

//app.use(express.urlencoded());
app.use(express.json());

app.use(methodOverride('_method'));

//Http logger
app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(process.env.PORT || '3002');
