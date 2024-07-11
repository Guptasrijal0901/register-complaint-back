// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./connect');
const Complaint = require('./models/Complaint');

const app = express();
app.use(bodyParser.json());
app.use(cors());

connectDB();

app.post('/api/complaints', async (req, res) => {
    const complaint = new Complaint(req.body);
    await complaint.save();
    res.send({ id: complaint._id, status: complaint.status });
});

app.get('/api/complaints', async (req, res) => {
    const complaints = await Complaint.find();
    res.send(complaints);
});

app.get('/api/complaints/:id', async (req, res) => {
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) return res.status(404).send('Complaint not found');
    res.send(complaint);
});

app.listen(5000, () => console.log('Server started on port 5000'));
