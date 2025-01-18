const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const dbURL='mongodb+srv://rahulrudra:rahulrudra@cluster0.z8yh46g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(err));

// Import routes
const taskRoutes = require('./routes/taskRoutes');
app.use('/tasks', taskRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
