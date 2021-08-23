const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    //[GET] /course/:slug
    storedCourses(req, res, next) {
        // Course.find({}, function (err, courses) {
        //     if (!err) {
        //         res.render('me/stored-courses',{courses: mutipleMongooseToObject(courses)});
        //     } else {
        //         next(err);
        //     }
        // });
        Course.find({})
            .then(courses => res.render('me/stored-courses', {
                courses: mutipleMongooseToObject(courses)
            }))
            .catch(next);
    }
}

module.exports = new MeController();
