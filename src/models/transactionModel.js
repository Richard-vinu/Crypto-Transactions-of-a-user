const mongoose = require('mongoose')


var accountSchema = mongoose.Schema({
    // userAddress: String,
    data:Object
    // result: String,
    // url: String
});


let accountSchema = mongoose.Schema({
    url:"String"
})


exports.model = mongoose.model('userAccount', accountSchema);


