const mongoose = require('mongoose')
const CoronaSchema = new mongoose.Schema({
    member_id:{
        type:String,
        required:true
    },
    positive_result_date: {
        type: Date,
    },
    recovery_date: {
        type:Date,
    }
},{
    timestamps:true
})

module.exports = mongoose.model('corona', CoronaSchema)