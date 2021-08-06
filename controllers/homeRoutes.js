const router = require('express').Router();
const { User, BlogPost, Comment } = require('../models');

router.get('/', async (req, res) => {
    try {
        const blogData = await BlogPost.findall({
            include: [{ model: User }],
        });
        const blog = blogData.map((post) => post.get({ plain: true }));
        res.render('home', { blog });
    }catch (e) {
        res.status(500).json(e);
    }
});

router.get('/post/:id', async (req, res) => {
    try {
        const blogData = await BlogPost.findByPk(req.params.id, {
            include: [
                { model: User },
                { model: Comment },
            ],
        });
        const blog = blogData.get({ plain: true });
        console.log(`\n ${blog.id} \n`);
        res.render('post', {blog});
    }catch (e) {
        res.status(500).json(e);
    }
});

router.get('/login', async (req, res) => {
    try {
        res.render('login');
    }catch (e) {
        res.status(500).json(e);
    }
});

router.get('/register', async (req, res) => {
    try {
        res.render('register');
    }catch (e) {
        res.status(500).json(e);
    }
});

router.get('/newPost', async (req, res) => {
    try {
        res.render('newPost');
    }catch (e) {
        res.status(500).json(e);
    }
});

router.get('/editPost/:id', async (req, res) => {
    try {
     const blogData = await BlogPost.findByPk(req.params.id, {
         include: [
             { model: User },
         ]
     });
     const blog = blogData.get({ plain: true });
     console.log(`\n ${blog.id} \n`);
     res.render('editPost', {blog});
    }catch (e) {
     res.status(500).json(e);
    }
});

router.get('/user', async (req, res) => {
    try {
     console.log(`\n Fetching all user data \n`);
     const userData = await User.findall();
     res.status(200).json(userData);
    }catch (e) {
        res.status(500).json(e);
    }
});

router.get('/user/all/:id', async (req, res) => {
    try {
     console.log(`\n Fetching data for user with id: ${req.params.id} \n`);
     const userData = await User.findByPk(req.params.id, {
         include: [
             { model: BlogPost },
             { model: Comment },
         ]
     });
     if (!userData) {
         res.status(404).json({ message: 'No user found with this id' });
     }else {
         res.status(200).json(userData);
     }
    }catch (e) {
        res.status(500).json(e);
    }
});

router.get('/blogPost', async (req, res) => {
    try {
     console.log(`\n Fetching all blog post data \n`);
     const blogData = await BlogPost.findall();
     res.status(200).json(blogData);
    }catch (e) {
        res.status(500).json(e);
    }
});

router.get('/blogPost/all/:id', async (req, res) => {
    try {
     console.log(`\n Fetching blog post data from id: ${req.params.id} \n`);
     const blogData = await BlogPost.findByPk(req.params.id, {
         include: [
             { model: User },
             { model: Comment },
         ]
     });
     if (!blogData) {
         res.status(404).json({ message: 'No blog post found with this id' });
     }else {
         res.status(200).json(blogData);
     }
    }catch (e) {
        res.status(500).json(e);
     
    }
});

router.get('/comment', async (req, res) => {
    try {
     console.log(`\n Fetching all comment data \n`);
     const commentData = await Comment.findall();
     res.status(200).json(commentData);
    }catch (e) {
        res.status(500).json(e);
    }
});

router.get('/comment/all/:id', async (req, res) => {
    try {
     console.log(`\n Fetching all comment data from id: ${req.params.id} \n`);
     const commentData = await Comment.findByPk(req.params.id, {
         include: [
             { model: User },
             { model: BlogPost },
         ]
     });
     if (!commentData) {
         res.status(404).json({ message: 'No comment found with this id' });
     }else {
         res.status(200).json(commentData);
     }
    }catch (e) {
        res.status(500).json(e);
     
    }
});

module.export = router;