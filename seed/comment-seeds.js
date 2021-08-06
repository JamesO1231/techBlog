const { Comment } = require('../models');

const commentData = [
    {
        content: 'Congratulations',
        user_id: 1,
        blogpost_id: 1,
    },
    {
        content: 'I am so impressed',
        user_id: 2,
        blogpost_id: 2,
    },
    {
        content: 'Agreed, this is getting old',
        user_id: 3,
        blogpost_id: 3,
    },
    {
        content: 'Please stop now!',
        user_id: 4,
        blogpost_id: 4,
    },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;