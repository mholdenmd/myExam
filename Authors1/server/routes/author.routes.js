const AuthorController = require('../controllers/author.controller')


module.exports = app => {
    app.get("/api/authors/all", AuthorController.findAllAuthors);
    app.post("/api/author/create", AuthorController.createAuthor);
    app.get("/api/author/random", AuthorController.randomAuthor);
    app.get("/api/author/:authorid", AuthorController.findAnAuthor);
    app.put("/api/author/update/:authorid", AuthorController.updateAuthor)
    app.delete("/api/author/delete/:authorid", AuthorController.deleteAuthor)


}