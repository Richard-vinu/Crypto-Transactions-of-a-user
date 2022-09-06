const express = require('express')
const router = express.Router()
const {getTransaction,getEtherPrice,getBalance} = require('./src/controller/transactionController')

router.get("/",(req,res)=>
    res.send('hello people')
)

router.get('/userTransactions',getTransaction)

router.get('/etherPrice',getEtherPrice)

router.get('/getBalance',getBalance)

module.exports = router