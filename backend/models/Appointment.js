const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;