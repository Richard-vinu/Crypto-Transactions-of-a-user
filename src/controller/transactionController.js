const axios = require('axios')


const getTransaction = async (req,res)=>{

    try{
        
    let address = req.query.address

    let options ={
        method:"get",
     url:`https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=GG2R8NBQWBI9PSSNY3Y343FBCU4SB8Z84R`,
 
    }

    let response = await axios(options)
    res.status(200).json({data:response.data});
    }
    catch(err){
        console.log(err);
        res.status(500).send({staus:false,msg:err.message})
    }

}


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
        res.status(500).send({staus:false,msg:err.message})
    }
}



module.exports = {getTransaction,getEtherPrice}

