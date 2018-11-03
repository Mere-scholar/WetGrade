exports.women = (req,res)=>{
    var state = -1;
    if(req.session.sign)
        state=2;
    // console.log(req.session.sign);
    res.render('women',{state:state});
};