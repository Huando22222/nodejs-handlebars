class SiteController {
    //[get]/news
    index(req,res) {
        res.render('home',{layout: 'main'});
    }

    //[get]/news/:slug
    search(req,res){
        // res.render('search',{layout: 'main'});
        res.send("search page");
    }
}

module.exports = new SiteController;