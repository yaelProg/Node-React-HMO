const mongoose = require('mongoose')
const VaccineSchema = new mongoose.Schema({
    member_id:{
        type:String,
        required:true
    },
    vaccine_date:{
        type:Date
    },
    manufacturer:{
        type:String,
        enum: ["Pfizer", "Moderna", "AstraZeneca", "Novavax"]
    }
},{
    timestamps:true
})

module.exports = mongoose.model('vaccine', VaccineSchema)