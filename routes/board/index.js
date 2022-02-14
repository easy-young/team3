const express = require('express')
const router = express.Router()
const {alertmove } = require('../../util/alert')
const boarddata = require('../../models/board.js')

router.get('/list',(req,res)=>{
    res.render('board/list',{
        data:boarddata
    })
})

router.get('/write',(req,res)=>{
    res.render('board/write')
})

router.post('/write',(req,res)=>{
    let writedata = req.body
    boarddata.push(writeadata)
    res.send(alertmove('/board/list',"글작성이 완료되었습니다."))
})

router.get('/view',(req,res)=>{
    let index =req.query.index
    let viewdata = boarddata[index-1]
    res.render('board/view',{
        data:viewdata,
        index:index
    })
})