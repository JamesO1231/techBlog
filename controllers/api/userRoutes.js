const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { username: req.body.username } });
        if (!userData) {
            res.status(403).json({ message: 'User not found' });
            return;
        }
        const validPassword = await userData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(403).json({ message: 'Invalid password' });
            return;
        }
        res.render('home');
    }catch (e) {
        res.status(403).json(e);
    }
});

router.post('/registerUser', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json(userData);
        });
        res.render('home');
    }catch (e) {
        res.status(400).json(e);
    }
});

router.post('/logout', async (req, res) => {
    console.log(`\n Loged in: ${req.session.logged_in} \n`);
    if (req.session.logged_in) {
        res.render('login');
    }
});

router.post('/newPost/makePost', async (req, res) => {
    const userData = await User.findOne({ where: { username: req.body.username } });
    if (!userData) {
        res.status(403).json({ message: 'Invalid username' });
        return;
    }
    const newPost = await User.create(req.body);
    res.render('home');
});

router.get('/:username', async (req, res) => {
    try {
        console.log(`\n Fetching user data from username: ${req.body.username} \n`);
        const userData = await User.findOne({ where: { username: req.params.username } });
        if (!userData) {
            res.status(403).json({ message: 'No user found under this user name' });
        }else {
            res.status(200).json(userData);
        }
    }catch (e) {
        res.status(500).json(e);
    }
});

module.exports = router;