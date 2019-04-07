
var Post = require('../../models/posts');

var singlePost = function(req,res){
    var post = new Post(req.body);
    post.save(function(err,post){
     if(err)
     {
        console.log("Data can't be inserted"+err);
        res.send(500,err);
     }
     else
     {
        res.json(200,post);
     }
    });
}

var allpost = function(req,res)
{
    Post.find(function(err,posts){
        if(err){
            res.json(500,err);
        }
        else
        {
            res.json(200,posts); 
        }
    })
}

module.exports ={
    singlePost,
    allpost

}