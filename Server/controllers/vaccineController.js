const Vaccine = require("../models/Vaccine")
const Member = require("../models/Member")

const getAllVaccines = async (req, res) => {
    const vaccines = await Vaccine.find().lean()
    if(!vaccines?.length)
        return res.status(400).json({message: 'No vaccines found'}) 
    return res.json(vaccines)
}

const getVaccineById = async (req, res) => {
    const {id} = req.params
    const vaccine = await Vaccine.findById(id).lean()
    if(!vaccine)
        return res.status(400).json({message: 'Vaccine not found'})
    res.json(vaccine)
}

const createNewVaccine = async (req, res) => {
    const {member_id, vaccine_date, manufacturer} = req.body
    if(!member_id)
        return res.status(400).json({message: 'Fields are required'})
    const member = await Member.findById(member_id).lean()
    if(!member)
        return res.status(400).json({message: 'No such member id found'})
    const vaccine = await Vaccine.create({member_id, vaccine_date, manufacturer})
    if(vaccine)
        return res.status(201).json({message: 'New vaccine task created'})
    else
        return res.status(400).json({message: 'Invalid vaccine'})
}

const updateVaccine = async (req, res) => {
    const {_id, member_id, vaccine_date, manufacturer} = req.body
    if(!_id || !member_id)
        return req.status(400).json({message: 'Fields are required'})
    const vaccine = await Vaccine.findById(_id).exec()
    if(!vaccine)
        return res.status(400).json({message: 'Vaccine not found'})
    const member = await Member.findById(member_id).lean()
    if(!member)
        return res.status(400).json({message: 'No such member id found'})
    vaccine.member_id = member_id
    vaccine.vaccine_date = vaccine_date
    vaccine.manufacturer = manufacturer
    const updatedVaccine = await vaccine.save()
    res.json(`Vaccine updated successfully`)
}

const deleteVaccine = async (req, res) => {
    const {id} = req.params
    const vaccine = await Vaccine.findById(id).exec()
    if(!vaccine)
        return res.status(400).json({message: 'Vaccine not found'})
    const result = await vaccine.deleteOne()
    const reply = `Vaccine: '${vaccine._id}' deleted successfully`
    res.json(reply)
}

module.exports = {getAllVaccines, getVaccineById, createNewVaccine, updateVaccine, deleteVaccine}