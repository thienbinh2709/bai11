const newRouter = require('./news');
const courseRouter = require('./courses');
const meRouter = require('./me');
const Course = require('../app/models/Course');
const {mutipleMongooseToObject} = require('../util/mongoose');

function route(app) {
    app.get('/', (req, res, next) => {

        Course.find({}, function (err, courses) {
            if (!err) {
                res.render('home',{courses: mutipleMongooseToObject(courses)});
            } else {
                next(err);
            }
        });
        //res.render('home');
    });
    app.use('/news', newRouter);
    app.use('/courses',courseRouter);
    app.use('/me',meRouter);
    app.get('/search', (req, res) => {
        res.render('search');
    });
    app.post('/search', (req, res) => {
        res.render('search');
    });
}

module.exports = route;
