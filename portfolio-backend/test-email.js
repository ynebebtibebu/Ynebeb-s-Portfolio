const nodemailer = require("nodemailer");

async function test() {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "ynebebtibebu9@gmail.com",
            pass: "iibr uopq ymds dket"
        }
    });

    try {
        await transporter.sendMail({
            from: "ynebebtibebu9@gmail.com",
            to: "ynebebtibebu9@gmail.com",
            subject: "Test Email ✔",
            text: "If you see this, your email works!"
        });

        console.log("Email sent!");
    } catch (err) {
        console.error("ERROR:", err);
    }
}

test();
