class NewsController {
    //[get]/news
    index(req,res) {
        res.render('news',{layout: 'main'});
    }

    //[get]/news/:slug
    show(req,res){
        res.send('news slugggg',{layout: 'main'});
    }
}

module.exports = new NewsController;