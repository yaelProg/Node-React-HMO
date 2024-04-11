const Member = require("../models/Member")
const Corona = require("../models/Corona")
const Vaccine = require("../models/Vaccine")


const getAllMembers = async (req, res) => {
    debugger
    const members = await Member.find().lean()
    if (!members?.length)
        return res.status(400).json({ message: 'No members found' })
    res.json(members)
}

const getMemberById = async (req, res) => {
    const { id } = req.params
    try {
        const member = await Member.findById(id).lean()
        if (!member)
            return res.status(400).json({ message: 'No such member found' })
        let coronaData = [];
        let vaccineData = [];
        coronaData = await Corona.findOne({ member_id: id }).lean();
        vaccineData = await Vaccine.find({ member_id: id }).lean();

        res.json({ member, coronaData, vaccineData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while fetching member data' });
    }
}
const createNewMember = async (req, res) => {
    const { first_name, last_name, id, city, street, house_number, birth_date, phone, cell_phone } = req.body;
    if (!id) {
        return res.status(400).json({ message: 'Id is required' });
    }

    try {
        const existingMember = await Member.findOne({ id }).lean();
        if (existingMember) {
            return res.status(400).json({ message: 'Member with the same ID already exists' });
        }

        const member = await Member.create({ first_name, last_name, id, city, street, house_number, birth_date, phone, cell_phone });
        return res.status(201).json({ message: 'New member created', member });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'An error occurred while creating member' });
    }
};
const updateMember = async (req, res) => {
    const { _id, first_name, last_name, id, city, street, house_number, birth_date, phone, cell_phonee } = req.body
    if (!_id || !id)
        return res.status(400).json({ message: 'Fields are required' })
    const member = await Member.findById(_id).exec()
    if (!member)
        return res.status(400).json({ message: 'Member not found' })
    member.first_name = first_name
    member.last_name = last_name
    member.id = id
    member.city = city
    member.street = street
    member.house_number = house_number
    member.birth_date = birth_date
    member.phone = phone
    member.cell_phonee = cell_phonee
    const updatedMember = await member.save()
    res.json(`'${updateMember.first_name} ${updateMember.last_name}' updated successfully`)
}

// const result = await Member.deleteOne()
// const reply = `Member: ${member.first_name} ${member.first_name}, ID: ${member.id} deleted successfully`
// res.json(reply)


const deleteMember = async (req, res) => {
    const { id } = req.params;

    try {
        const member = await Member.findById(id).exec();
        if (!member) {
            return res.status(400).json({ message: 'Member not found' });
        }
        await Corona.deleteMany({ member_id: id });
        await Vaccine.deleteMany({ member_id: id });
        await Member.deleteOne({ _id: id });
        const reply = `Member: ${member.first_name} ${member.last_name}, ID: ${member._id} deleted successfully`;
        res.json(reply);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while deleting member and associated data' });
    }
}

module.exports = { getAllMembers, getMemberById, createNewMember, updateMember, deleteMember }