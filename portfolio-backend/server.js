const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

// --- Validation Function ---
const isValidEmail = (email) => {
    // A simple regex checks for format: local-part@domain.tld
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const app = express();

const SENDER_EMAIL = process.env.SENDER_EMAIL;
const GMAIL_PASS = process.env.GMAIL_PASS;
app.use(
    cors({
        origin: [
            "https://ynebeb-s-portfolio-ashy.vercel.app",
            "http://localhost:5173"
        ],
        methods: ["POST"]
    })
);
app.use(express.json());

// ==========================
//  Nodemailer Configuration upyo slyf seby nsf
// ==========================
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: SENDER_EMAIL,
        pass: GMAIL_PASS
    }
});

// ==========================
//  Contact API - FIXED FOR AUTHENTICATION
// ==========================
app.post("/contact", async (req, res) => {
    const { name, email, message } = req.body;

    // 1. EMAIL FORMAT VALIDATION: Check email structure
    // This is necessary to stop poorly formatted emails from reaching Nodemailer
    if (!isValidEmail(email)) {
        return res.status(400).json({ // Return 400 Bad Request
            status: "error",
            message: "Invalid email format. Please check your email address."
        });
    }

    try {
        await transporter.sendMail({
            // FIX: Set the FROM address to the authenticated account (SENDER_EMAIL)
            // This prevents Nodemailer from failing on invalid 'from' emails.
            from: `"${name}" <${SENDER_EMAIL}>`,
            
            // NEW: Add the user's email to replyTo for easy response
            replyTo: email, 
            
            to: SENDER_EMAIL,
            subject: `Portfolio Message from ${name} (Reply-to: ${email})`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        });

        return res.status(200).json({ status: "success" });

    } catch (err) {
        console.error("Email Sending Error:", err);
        return res.status(500).json({
            status: "error",
            message: "Email sending failed due to server configuration or network issue.",
            error: err.toString()
        });
    }
});


// ==========================
// Start Server
// ==========================
app.listen(5000, () => {
    console.log("\n✅ Backend running at http://localhost:5000");
});