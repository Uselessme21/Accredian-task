const express = require('express');
const cors=require('cors')
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authroutes');

const app = express();
const PORT = 6060;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', authRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
