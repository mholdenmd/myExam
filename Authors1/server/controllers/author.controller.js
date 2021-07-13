const Author = require('../models/author.model')


module.exports.findAllAuthors = (req, res) => {
    console.log("logging author--->", Author)
    Author.find()
        .then(allAuthors => {
            console.log("****TRYING TO FIND ALL OF THE AUTHORS****")
            res.json({ results: allAuthors })
        })

        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.createAuthor= (req, res) => {
    Author.create(req.body)
        .then(newlyCreatedAuthor => {
            console.log("*/*/ CREATING AUTHOR */*/")
            res.json({ results: newlyCreatedAuthor })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.randomAuthor = (req, res) => {
Author.find()
    .then(allAuthor => {
        console.log("*/*/ FINDING RANDOM AUTHOR */*/")
        let maxindex = allAuthor.length
        console.log(Math.random(maxindex))
        function GetRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        let randomNum = GetRandomInt(maxindex)
        console.log("random index it is", randomNum)
        res.json({ results: allAuthor[randomNum] })
    })
    .catch()
}

module.exports.findAnAuthor = (req, res) => {
    Author.findOne({ _id: req.params.authorid })
        .then(oneAuthor => {
            console.log("*/*/ FINDING AUTHOR */*/")
            res.json({ results: oneAuthor })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createAuthor= (req, res) => {
    Author.create(req.body)
        .then(newlyCreatedAuthor => {
            console.log("*/*/ CREATING AUTHOR*/*/")
            res.json({ results: newlyCreatedAuthor })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.authorid },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => {
            console.log("*/*/ UPDATING AUTHOR */*/")
            res.json({ user: updatedAuthor })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


module.exports.deleteAuthor = (req, res) => {
    console.log("hit the delete function with this request.params", req.params )
    Author.deleteOne({ _id: req.params.authorid })
        .then(result => {
            console.log("*/*/ GETTING RID OF THIS  AUTHOR */*/")
            res.json({ result: result })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
