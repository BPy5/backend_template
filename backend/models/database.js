const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb+srv://bisharab10:WYO7xvk56TcbMHAg@maincluster.tfbojo6.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => { console.log('Connected to MongoDB'); });