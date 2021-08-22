const {models}= require('../models/index');

exports.index= async (req, res, next)=>{
    try{
    let quizzes= await models.Quiz.findAll();
    res.render("quizzes/index",{quizzes});
    }catch(error){
        next(error);
    }
}