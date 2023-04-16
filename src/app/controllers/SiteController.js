class SiteController {
    //[get]/news
    index(req,res) {
        res.render('home',{layout: 'main'});
    }

    //[get]/news/:slug
    search(req,res){
        res.render('search',{layout: 'main'});
        //es.send('search');
    }
}

module.exports = new SiteController;