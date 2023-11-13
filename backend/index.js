const express = require('express');
const logger = require('./middleware/logger');
const appointmentRoutes = require('./routes/appointmentRoutes');

// Connect to MongoDB
require('./models/database');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(logger);

// Routes
app.use('/appointments', appointmentRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});