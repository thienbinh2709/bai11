const Course = require('../models/Course');
const { mutipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class CourseController {
    //[GET] /course/:slug
    create(req, res, next) {
        res.render('courses/creates');
    }
    edit(req, res, next) {
        Course.findById(req.params.id)
        .then(course => res.render('courses/edit',{
            course: mongooseToObject(course)
        }))
        .catch(next);
    }
    //[Post] /course/:slug
    store(req, res, next) {
        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {

            });
    }
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render(res.json(course));
            })
            .catch(next);
    }
    home(req, res, next) {
        res.send('in1');
    }
    update(req, res, next) {
        Course.updateOne({_id: req.params.id}, req.body)
        .then(() => res.redirect('/me/stored/courses'))
        .catch(next);
    }
    delete(req, res, next){
        Course.deleteOne({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next);
    }

}

module.exports = new CourseController();
