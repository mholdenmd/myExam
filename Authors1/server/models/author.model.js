const mongoose = require ('mongoose');


const AuthorSchema = new mongoose.Schema({
    author:{
        type: String,
        required :[true, "Author needs to be filled out"],
        minlength: [2, "First name must be at least 3 characters"]
    },
    quote: {
        type: String,
        required: [true , "A Quote is required!"],
        minlength: [2, "Quote must be at least 3 characters"]
    },
    quotedOn: {
        type: Date,
        required: [true, "When in history was this ?"]
    }
})

const Author = mongoose.model("Author", AuthorSchema)

module.exports = Author;