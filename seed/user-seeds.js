const { User } = require('../models');

const userData = [
    {
        username: 'Bilbo Baggins',
        email: 'theringismine@gmail.com',
        password: 'Ftheshireimout',
    },
    {
        username: 'Gandalf the Gray',
        email: 'lovemyhobbits@gmail.com',
        password: 'bilboistrippin',
    },
    {
        username: 'Frodo Baggins',
        email: 'samismybff@gmail.com',
        password: 'imisssam',
    },
    {
        username: 'Gollum',
        email: 'smeagolisweak@gmail.com',
        password: 'myprecious',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;