// Import required modules
const express = require('express');
// Import Mongoose
const mongoose = require("mongoose");

// Create an Express app
const app = express();

// Start the server
const port = 3000; // You can use any available port you prefer
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// Define a basic route
app.get('/', (req, res) => {
    res.send('Hello, this is your Express server!');
  });

// Connect Mongoose
mongoose.connect("mongodb://localhost:27017/stream-flex", {
    useNewURLParser: true,
    useUnifiedTopology: true,
})




