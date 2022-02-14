const express = require('express');
const router = express.Router();
const user = require('../models/user');
const {alertmove} = require('../util/alert');
const userRouter = require('./user');
const boardRouter = require('./board');

router.get('/', (req,res)=>{
    console.log('Main Page : ', req.session);
    const {user} = req.session;
    res.render('index', {
        user
    });
});

const Auth = (req, res, next)=>{
    let {user} = req.session;
    if (user != undefined) {
        next();
    } else {
        res.send(alertmove('/', 'Login first.'));
    }
};

router.use('/user', userRouter);
router.use('/board', Auth, boardRouter);

module.exports = router;