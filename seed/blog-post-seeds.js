const { BlogPost } = require('../models');

const blogData = [
    {
        title: 'We are posting',
        content: 'We have a post!',
        user_id: 1,
    },
    {
        title: 'We have done it again',
        content: 'I am so incredibly proud',
        user_id: 2,
    },
    {
        title: 'This is getting repetitive',
        content: 'Maybe this is enough seeded data',
        user_id: 3,
    },
    {
        title: 'I lied, we are doing it again',
        content: 'Ok I will stop now',
        user_id: 4,
    },
];

const seedPost = () => BlogPost.bulkCreate(blogData);

module.exports = seedPost;