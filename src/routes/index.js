const newRouter = require('./news');

function route(app) {
    app.get('/', (req, res) => {
        res.render('home');
    });
    app.use('/news', newRouter);
    app.get('/search', (req, res) => {
        res.render('search');
    });
    app.post('/search', (req, res) => {
        res.render('search');
    });
}

module.exports = route;
