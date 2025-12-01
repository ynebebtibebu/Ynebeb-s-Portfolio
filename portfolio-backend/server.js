const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// =================================================================
// 1. Middleware Setup
// =================================================================

// CORS (Cross-Origin Resource Sharing) configuration.
// It allows your frontend (which runs on a different port, e.g., 5174) 
// to send requests to this backend (port 5000).
app.use(cors());

// Body parser middleware: enables the server to read incoming JSON data
// (which is how the frontend sends the form data).
app.use(express.json());


// =================================================================
// 2. Contact Route Handler (POST /contact)
// =================================================================

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    // --- Basic Server-Side Validation ---
    if (!name || !email || !message) {
        // Sends a 400 Bad Request response if any field is missing
        return res.status(400).json({ 
            status: 'error', 
            message: 'All fields are required (name, email, message).' 
        });
    }

    // ===============================================================
    // REAL WORLD ACTION: This is where you would call an email 
    // sending library (like Nodemailer) or save the message 
    // to a database (like MongoDB or PostgreSQL).
    // ===============================================================
    
    // For now, we simulate success by logging the data to the server console.
    console.log('--- NEW CONTACT MESSAGE RECEIVED ---');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    console.log('------------------------------------');

    // Send a successful response back to the frontend
    res.status(200).json({ 
        status: 'success', 
        message: 'Message received and processed successfully!' 
    });
});


// =================================================================
// 3. Server Start
// =================================================================

app.listen(PORT, () => {
    console.log(`\n✅ Portfolio Backend API listening at http://localhost:${PORT}`);
    console.log('----------------------------------------------------');
});