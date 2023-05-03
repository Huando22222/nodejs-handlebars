const Course = require('../models/Course');
const { mutipleMongooseToObject} =require('../../util/mongoose');


class MeController {

    //[get] /me/stored/courses 
    storedCourses(req,res,next){
        let courseQuery=Course.find({});

        
        if(req.query.hasOwnProperty('_sort')){
            courseQuery = courseQuery.sort({
                //name: 'asc'
                [req.query.column]: req.query.type
            });
        }

        Promise.all([courseQuery, Course.countDocumentsDeleted()])
            .then(([courses,deletedCount]) =>
                res.render('me/stored-courses',{
                    deletedCount: deletedCount,
                    courses: mutipleMongooseToObject(courses)
                }) 
            )
            .catch(next);

        // Course.countDocumentsDeleted()
        //     .then((deletedCount)=> {
        //         console.log(deletedCount);
        //     })
        //     .catch(()=> {});

        // Course.find({})
        //     .then((courses) => res.render('me/stored-courses',{
        //         courses: mutipleMongooseToObject(courses)
        //     }),)
        //     .catch(next);
    }

    //[get] /me/trash/courses 
    trashCourses(req,res,next){
        Course.findDeleted({})//mongoose
            .then((courses) => res.render('me/trash-courses',{
                courses: mutipleMongooseToObject(courses)
            }),)
            .catch(next);
    }
}
module.exports = new MeController();