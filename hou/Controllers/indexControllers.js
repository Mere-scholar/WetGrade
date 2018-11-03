exports.index = (req , res)=>{
    if(req.session.sign){
        state=2;
        var user =req.session.user;
        res.render('index',{user:user});
    }else{
        res.render('admin',{});
    }
}