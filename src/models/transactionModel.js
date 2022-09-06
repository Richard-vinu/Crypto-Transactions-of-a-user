const mongoose = require('mongoose')


var accountSchema = mongoose.Schema({
    // userAddress: String,
    data:Object
    // result: String,
    // url: String
});


exports.model = mongoose.model('userAccount', accountSchema);


