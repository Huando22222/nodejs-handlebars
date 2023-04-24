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
        
        //const formData=req.body;
        req.body.image=`https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(req.body);
        course.save()
            .then(()=> res.redirect('/me/stored/courses'))
            .catch(error => {
                //thong bao loi
                res.json(req.body + 'trung ten khoa hoc & slug');
                //https://www.youtube.com/watch?v=bvZ1_P9eCpw&list=PL_-VfJajZj0VatBpaXkEHK_UPHL7dW6I3&index=28
                //chua biet fix loi sao
                res.redirect('/');
            })
        
        // res.json(req.body);//check only

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
    update(req,res,next){ //express
        Course.updateOne({_id: req.params.id},req.body)
            .then(()=> res.redirect('/me/stored/courses'))
            .catch(next);
    }

    //[DELETE] /courses/:id  
    destroy(req,res,next){//mongoose-delete
        Course.delete({_id: req.params.id})
            .then(()=> res.redirect('back'))
            .catch(next);
    }
    //[DELETE] /courses/:id/force
    forceDestroy(req,res,next){//mongoose-delete
        Course.deleteOne({_id: req.params.id})  //recommend soft delete x2
            .then(()=> res.redirect('back'))
            .catch(next);
    }
    //[PATCH] /courses/:id/restore
    restore(req,res,next){//mongoose-delete
        Course.restore({_id: req.params.id})
            .then(()=> res.redirect('back'))
            .catch(next);
    }
}

module.exports = new CourseController();