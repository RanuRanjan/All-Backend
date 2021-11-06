const express = require('express');

const router = express.Router();

const Post = require("../models/product.model")

const authenticate = require('../middlewares/authenticate')

router.get("/new", function(req, res) {
    return res.render("post/new")
});
router.post("/",authenticate,async function(req, res) {
    const post = await Post.create(req.body);
    const user = req.user;

    delete user.password
    return res.send({post, user})
   });




router.get("/",authenticate,async function(req, res) {
    const post = await Post.find().lean().exec();
    const user = req.user;

    delete user.password
    return res.send({post, user})
   });

 module.exports = router;