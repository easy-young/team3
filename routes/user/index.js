const express = require('express');
const router = express.Router();
const user = require('../../models/user');
const {alertmove} = require('../../util/alert');

router.get('/login', (req, res)=>{
    res.render('user/login');
});

router.post('/login', (req, res)=>{
    let {userid, userpw} = req.body;
    let [item] = user.filter(v=>(v.userid == userid && v.userpw == userpw));
    if (item != undefined) {
        req.session.user = {...item};
        res.redirect('/');
    } else {
        res.send(alertmove('/user/login','Try again.'));
    }
});

router.get('/profile', (req, res)=>{
    res.render('user/profile');
});

router.get('/logout', (req, res)=>{
    req.session.destroy(()=>{
        req.session
    });
    res.send(alertmove('/','Logout Success.'));
});

module.exports = router;