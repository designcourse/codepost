const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const post = require('../models/post');

const db = "mongodb://dreamache:codepost101s!@ds127731.mlab.com:27731/codepost";
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err) {
    if(err) {
        console.error("Error!"+err);
    }
});

router.get('/posts', function(req, res) {
  console.log('Get request for all posts');
  post.find({})
    .exec(function(err,posts){
        if (err) {
            console.log('error retrieving posts');
        } else {
            res.json(posts);
        }
    });
});

router.get('/details/:id', function(req, res) {

  post.findById(req.params.id)
    .exec(function(err,post){
        if (err) {
            console.log('error retrieving post');
        } else {
            res.json(post);
        }
    });
});

router.post('/posts', function(req,res) {
    console.log('Post a post');
    var nPost = new post();
    nPost.title = req.body.title;
    nPost.url = req.body.url;
    nPost.description = req.body.description;
    nPost.save(function(err, addedPost) {
        if (err) {
            console.log('Error inserting the post');
        } else {
            res.json(addedPost);
        }
    });
});

module.exports = router;