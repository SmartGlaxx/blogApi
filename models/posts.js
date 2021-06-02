const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    title : {
        type : String,
        required : [true, "Please add a Title."],
        trim : true,
        maxlength : [100, "Post Title should be no more than 100 characters."],
    },
    postbody : {
        type : String,
        required : [true, 'Please enter your Post.'],
        trim : true,
        maxlength : [50000, 'Posts should not be morte than 50000 characters']
    }
})

module.exports = mongoose.model.Post || mongoose.model('Post', postSchema)