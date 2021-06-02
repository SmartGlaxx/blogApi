const mongoose = require('mongoose')
const Post = require('../models/posts')

const getControllers = ((req, res)=>{
   Post.find()
   .exec()
   .then(results => {
       res.status(200).json({
           count : results.length,
           message : 'Posts found.',
           Posts : 
                results.map(result =>{
                    return{
                        _id : result.id,
                        title : result.title,
                        postbody : result.postbody
                    }
               })
           
       })
   })
   .catch((error)=>{
       res.status(400).json({
           message : "Error fetching posts."
       })
   })
})

const postContoller = ((req,res)=>{
    const post = new Post({
        _id : mongoose.Types.ObjectId(),
        title : req.body.title,
        postbody : req.body.postbody
    })

    post.save()
    .then(result =>{
        res.status(201).json({
            message : 'Post added'
        })
    })
    .catch((error)=>{
       res.status(400).json({
           message : "Error adding post."
       })
   })
})

const getController = ((req, res)=>{
    const {postid} = req.params
    Post.find({_id : postid})
    .then(result => {
        res.status(200).json({
            message : 'Post found',
            post : result
        })
    })
    .catch((error)=>{
       res.status(400).json({
           message : "Error fetching post."
       })
   })
})

const updateController = (req,res)=>{
	const {postid} = req.params;
	    Post.findByIdAndUpdate({_id : postid},{title : req.body.title, postbody : req.body.postbody})
	    .then(result =>{
	        res.status(201).json({
	            message : 'Post updated.'
	        })
	    })
	    .catch((error)=>{
	       res.status(400).json({
	           message : "Error updating post."
	       })
	   })

}

const deleteController = ((req, res)=>{
    const {postid} = req.params

    Post.deleteOne({_id : postid})
    .exec()
    .then(result =>{
        res.status(200).json({
            message : "Post deleted."
        })
    })
    .catch((error)=>{
       res.status(400).json({
           message : "Error deleting post."
       })
   })
})

const allControllers = {getControllers, postContoller, getController, updateController, deleteController}
module.exports  = allControllers


