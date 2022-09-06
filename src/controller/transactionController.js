const axios = require('axios')
const  transactionModel = require('../models/transactionModel')

//*TASk-1 Getting the data of user transacation with his address
const getTransaction = async (req,res)=>{

    try{
    let address = req.query.address

    let options ={
        method:"get",
     url:`https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=GG2R8NBQWBI9PSSNY3Y343FBCU4SB8Z84R`,
 
    }

    let response = await axios(options)

    // value = response.data
    //  let db =  await transactionModel.create(value)()
    //  return res.status(200).json({data:value});
   // return res.status(200).json({data:response.data});
    }
    catch(err){
        console.log(err);
        res.status(500).send({staus:false,msg:err.message})
    }
}


//*TASK-2 Getting the current the price of ether in Indian Rupee
const getEtherPrice = async (req,res)=>{

    try{
        let data = req.query
        let {ids,vs_currencies} = data

        let options = {
            method:"get",
            url:`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=${vs_currencies}`
        }

        let response = await axios(options)
        res.status(201).json({data:response.data})
    }
    catch(err){
        console.log(err);
        return res.status(500).send({staus:false,msg:err.message})
    }
}



//*TASK-3 Getting the Balance of the user
const getBalance = async (req,res)=>{

    try{

        let address = req.query.address

        let options ={
            method:"get",
         url:`https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=GG2R8NBQWBI9PSSNY3Y343FBCU4SB8Z84R`,
     
        }
    
        let response = await axios(options)

        .insert(response)

        return res.status(200).json({data:response.data});
        }
        catch(err){
            console.log(err);
           return res.status(500).send({staus:false,msg:err.message})
        }

}

//required output
//current balance :""
// current price:""

module.exports = {getTransaction,getEtherPrice,getBalance}

