const express = require('express')
const router = express.Router()
const {getTransaction} = require('./src/controller/transactionController')

router.get("/",(req,res)=>
    res.send('hello people')
)

router.get('/transactions',getTransaction)

module.exports = router