const router = require('express').Router();
const { User, BlogPost, Comment } = require('../../models');

router.post('/newPost', async (req, res) => {
    const postData = await User.findOne({ where: { username: req.body.username } });
    if (!postData) {
        res.status(403).json({ message: 'Invalid username' });
        return;
    }
    const blogData = {
        title: req.body.title,
        content: req.body.content,
        user_id: postData.id,
    }
    res.render('home');
    const newPost = await BlogPost.create(blogData);
});

router.delete('/:id', async (req, res) => {
    try {
        const blogData = await BlogPost.destroy({
            where: { id: req.params.id }
        });
        if (!blogData) {
            res.status(404).json({ message: 'No blog found under this id' });
        }else {
            console.log(`\n Deleting blog post under id: ${req.params.id} \n`);
            res.status(200).json(blogData);
        }
    }catch (e) {
        res.status(500).json(e);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const blogData = await BlogPost.update(
            {
                title: req.body.title,
                content: req.body.content,
                user_id: req.body.user_id,
            }, { where: {id: req.params.id} },
        )
        if (!blogData) {
            res.status(404).json({ message: 'No blog found under this id' });
        }else {
            console.log(`\n Editing blog post record id: ${req.params.id} \n`);
            res.status(200).json(blogData);
        }
    }catch (e) {
        res.status(400).json(e)
    }
});

module.exports = router;