const mongoose = require('mongoose')
const MemberSchema = new mongoose.Schema({
    first_name:{
        type:String
    },
    last_name:{
        type:String,
    },
    id:{
        type:String,
        unique: true,
        required:true
    },
    city:{
        type:String
    },
    street:{
        type:String
    },
    house_number:{
        type:Number
    },
    birth_date:{
        type:Date
    },
    phone:{
        type:String,
        match:/[0-9]{9}/
    },
    cell_phone:{
        type:String,
                match:/[0-9]{10}/

    },
    img_url:{
        type:String
    }
},{
    timestamps:true
})

module.exports = mongoose.model('member', MemberSchema)