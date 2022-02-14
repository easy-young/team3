const express = require('express');
const nunjucks = require('nunjucks');
const session = require('express-session');
const Memorystore = require('memorystore')(session);
const app = express();
const router = require('./routes');

app.set('view engine', 'html');
nunjucks.configure('views', {express:app});

const maxAge = 5*60*1000;
let sessionObj = {
    secret:'qwerty',
    resave:false,
    saveUninitialized:true,
    store:new Memorystore({checkPeriod:maxAge}),
    cookie:{
        maxAge:maxAge
    }
};

app.use(session(sessionObj));
app.use(express.urlencoded({extended:true}));

app.use(router);

app.listen(3000, ()=>{
    console.log('server start 3000');
});