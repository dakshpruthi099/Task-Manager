const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');
const taskRoutes = require('./tasks');

require('dotenv').config();


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use('/api/tasks', taskRoutes);
app.use(cors());
app.use(helmet());
app.use(express.json()); // for parsing application/json
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
}));

// Basic route
app.get('/', (req, res) => {
  res.json({ message: "Welcome to the Task Manager API" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
