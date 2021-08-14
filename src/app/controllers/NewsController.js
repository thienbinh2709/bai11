class NewsController {
    //[GET] /news
    index(req, res) {
        res.render('news');
    }

    //[GET] /news/:slug
    show(req, res) {
        res.send('error');
    }

    //[GET] /news/in1
    in1(req, res) {
        res.send('in1');
    }
}

module.exports = new NewsController();
