
module.exports = function V_session(req, res, next){
    if(!req.session.user){
        res.redirect('/');
    }else {
        next();
    }
}