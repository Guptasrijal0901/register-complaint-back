// models/Complaint.js
const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
    name: String,
    age: Number,
    address: String,
    postalAddress: String,
    complaintTime: { type: Date, default: Date.now },
    incidentDetails: String,
    status: { type: String, default: 'Pending' } // New field for status
});

module.exports = mongoose.model('Complaint', complaintSchema);
