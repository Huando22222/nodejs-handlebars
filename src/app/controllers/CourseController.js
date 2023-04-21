const Course = require('../models/Course');
const { mutipleMongooseToObject, mongooseToObject} =require('../../util/mongoose');

class CourseController {
    show(req,res,next) {
        Course.findOne({slug: req.params.slug})
            .then(course=>
                res.render('courses/show',{course: mongooseToObject(course)})
            )
            .catch(next)
    }

    //[get] /courses/create
    create(req,res,next){
        res.render('courses/create');
    }

    //[POST] /courses/store
    store(req,res,next){
        // res.json(req.body);//check only
        const formData=req.body;
        formData.image=`https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course.save()
            .then(()=> res.redirect('/'))
            .catch(error => {
                //thong bao loi
                res.json(req.body + 'trung ten khoa hoc & slug');
                //https://www.youtube.com/watch?v=bvZ1_P9eCpw&list=PL_-VfJajZj0VatBpaXkEHK_UPHL7dW6I3&index=28
                //chua biet fix loi sao
                res.redirect('/');
            })
        // res.json(req.body)

    }

    //[GET] /courses/:id/edit
    edit(req,res,next){ 
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit',{
                course: mongooseToObject(course)
            }))
            .catch(next);
    }

    //GET, POST, PUT, PATH, DELETE, OPTIONS, HEAD

    //PUT /courses/:id  
    update(req,res,next){ 
        Course.updateOne({_id: req.params.id},req.body)
            .then(()=> res.redirect('/me/stored/courses'))
            .catch(next);
    }
}

module.exports = new CourseController();