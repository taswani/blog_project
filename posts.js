const express = require("express"); //Express
const router = express.Router(); //Router
const { Post } = require("./model"); //PostSchema

//Get route for top posts.
router.get("/", function(req, res, next) {
  Post.find()
    .limit(5)
    .exec(function(err, post) {
      if (err) return next(err);
      //Database accuracy purposes
      //uncomment if you want to see the databases' contents
      //console.log(post);
      res.json(post);
    });
});

//Post route to create a search.
router.post("/", function(req, res, next) {
  Post.create(req.body, function(err, post) {
    if (err) return next(err);
  });
});

module.exports = router;
