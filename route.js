const express = require('express')
const router = express.Router()
const {getTransaction,getEtherPrice} = require('./src/controller/transactionController')

router.get("/",(req,res)=>
    res.send('hello people')
)

router.get('/userTransactions',getTransaction)

router.get('/etherPrice',getEtherPrice)


module.exports = router