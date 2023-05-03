module.exports = function sortMiddleware(req, res, next) {

    res.locals._sort = {
        enabled: false,
        type: 'default',
    }//https://www.youtube.com/watch?v=MJ7JZSW6seA&list=PL_-VfJajZj0VatBpaXkEHK_UPHL7dW6I3&index=34

    if(req.query.hasOwnProperty('_sort')){
        // res.locals._sort.enabled = true;
        // res.locals._sort.type = req.query.type;
        // res.locals._sort.column = req.query.column;

        Object.assign(res.locals._sort, {
            enabled: true,
            type: req.query.type,
            column: req.query.column,
        });
    }

    next();
};