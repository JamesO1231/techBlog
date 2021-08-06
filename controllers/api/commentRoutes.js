const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
    try {
        console.log(`\n Creating new comment with id: ${req.body.id} \n`);
        const commentData = await Comment.create(req.body);
        res.status(200).json(commentData);
    }catch (e) {
        res.status(400).json(e);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const commentData = await Comment.update(
            {
                content: req.body.content,
                user_id: req.body.user_id,
                blogpost_id: req.body.blogpost_id },
                { where: {id: req.params.id} },
        )
        if (!commentData) {
            res.status(404).json({ message: 'No comment found under this id' });
        }else {
            console.log(`\n Editing comment under id: ${req.params.id} \n`);
            res.status(200).json(commentData);
        }
    }catch (e) {
        res.status(400).json(e);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: { id: req.params.id }
        });
        if (!commentData) {
            res.status(404).json({ message: 'No comment found under this id' });
        }else {
            console.log(`\n Deleting comment under id: ${req.params.id} \n`);
            res.status(200).json(commentData);
        }
    }catch (e) {
        res.status(500).json(e);
    }
});

module.exports = router;