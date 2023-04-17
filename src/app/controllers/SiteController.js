const Course = require('../models/Course');
const { mutipleMongooseToObject} =require('../../util/mongoose');
class SiteController {
    //[get]/news
    // index(req,res) {
    //     res.render('home',{layout: 'main'});
    // }

    index(req,res,next) {//https://www.youtube.com/watch?v=nqLXmpEgU2w&list=PL_-VfJajZj0VatBpaXkEHK_UPHL7dW6I3&index=25
        // Course.find({}).lean()//another way
        //     // .then(courses => res.json(courses))
        //     .then(courses => res.render('home',{
        //         courses: courses,
        //     }))
        //     .catch(next);
        Course.find({})
            // .then(courses => {
            //     courses = courses.map(course => course.toObject())
            //     res.render('home',{courses});
            // })
            .then(courses => {
                res.render('home',{
                    courses: mutipleMongooseToObject(courses)
                });
            })
            .catch(next);
    }

    //[get]/news/:slug
    search(req,res){
        res.render('search',{layout: 'main'});
        //es.send('search');
    }
}

module.exports = new SiteController;