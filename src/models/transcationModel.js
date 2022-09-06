const mongoose = require('mongoose')


var accountSchema = mongoose.Schema({
    status: String,
    result: String,
    url: String
});


var Data = mongoose.model('Data', accountSchema);


