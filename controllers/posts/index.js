
var Post = require('../../models/posts');

//insert data
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
// get data
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

//search data
var serachPost = function(req,res){
    Post.findById(req.params.id,function(err,singlePostsObject){
       if(err){
           res.json("Can't find data -"+err);
       }
       else
       {
           res.json(200,singlePostsObject);
       }
    });
}

//Search and update
var serachAndUpdate = function(req,res){
    //getting id from url
    Post.findById(req.params.id,function(err,matchedObject){
        if(err){
            res.send(500,"Document not found - "+err);
        }
        else
        {
            //Getting data from Body
            matchedObject.title = req.body.title;
            matchedObject.body = req.body.body;
            matchedObject.author = req.body.author;
            matchedObject.save(function(err,updatedContent){
                if(err){
                    res.send(500,"No data updated -"+err);
                }
                else
                {
                    res.json(updatedContent);
                }
            })
        }
    })
}


//Delete 
var DeleteObject = function(req,res){
    Post.findByIdAndRemove(req.params.id,function(err,post){
        if(err){
            res.send(500,"Can't Delete - "+err);
        }
        else
        {
            res.send(200,"Deleted")
        }
    })
}


module.exports ={
    singlePost,
    allpost,
    serachPost,
    serachAndUpdate,
    DeleteObject

}