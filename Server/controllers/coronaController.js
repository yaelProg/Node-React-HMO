const Corona = require("../models/Corona")
const Member = require("../models/Member")

const getAllCoronas = async (req, res) => {
    const coronas = await Corona.find().lean()
    if(!coronas?.length)
        return res.status(400).json({message: 'No coronas found'}) 
    return res.json(coronas)
}

const getCoronaById = async (req, res) => {
    const {id} = req.params
    try{
    const corona = await Corona.findById(id).lean()
    if(!corona)
        return res.status(400).json({message: 'Corona not found'})
    return res.json(corona)
    }
    catch{
        return res.status(400).json({message: 'No corona found'})
    }    
}
const getCoronaByMemberId = async (req, res) => {
    const  {memberId}  = req.params;
    try {
        const corona = await Corona.findOne({member_id: memberId}).lean()
    if(!corona)
        return res.status(400).json({message: 'The member did not get corona'})
    return res.json(corona)
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'An error occurred while fetching corona data' });
    }
}

const createNewCorona = async (req, res) => {
    const {member_id, positive_result_date, recovery_date} = req.body
    if(!member_id)
        return res.status(400).json({message: 'Member is required'})
    const member = await Member.findById(member_id).lean()
        if(!member)
            return res.status(400).json({message: 'No such member id found'})
    const corona = await Corona.create({member_id, positive_result_date, recovery_date})
    if(corona)
        return res.status(201).json({message: 'New corona created'})
    else
        return res.status(400).json({message: 'Invalid corona'})
}

const updateCorona = async (req, res) => {
    const {_id, member_id, positive_result_date, recovery_date} = req.body
    if(!member_id)
        return res.status(400).json({message: 'Fields are required'})
    try{
    const corona = await Corona.findOne({member_id: member_id}).exec()
    if(!corona)
        return res.status(400).json({message: 'Corona not found'})
    const member = await Member.findById(member_id).lean()
    if(!member)
        return res.status(400).json({message: 'No such member id found'})
    corona.positive_result_date = positive_result_date
    corona.recovery_date = recovery_date
    const updatedCorona = await corona.save()
    return res.json(`Corona updated successfully`)
    }
    catch{
        return res.status(400).json({message: 'Corona update failed'})
    }    
}

const deleteCorona = async (req, res) => {
    const {id} = req.params
    const corona = await Corona.findById(id).exec()
    if(!corona)
        return res.status(400).json({message: 'Corona not found'})
    const result = await corona.deleteOne()
    const reply = `Corona deleted successfully`
    res.json(reply)
}

module.exports = {getAllCoronas, getCoronaById, getCoronaByMemberId, createNewCorona, updateCorona, deleteCorona}

