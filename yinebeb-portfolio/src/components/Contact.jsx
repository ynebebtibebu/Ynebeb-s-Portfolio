import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [statusMessage, setStatusMessage] = useState(null);  // UI message
    const [messageType, setMessageType] = useState("");        // success or error

    // Handle input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Submit form
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("https://ynebeb-s-portfolio-2.onrender.com/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (data.status === "success") {
                setMessageType("success");
                setStatusMessage("Message sent successfully!");

                setFormData({ name: "", email: "", message: "" });
            } else {
                setMessageType("error");
                setStatusMessage("Failed to send message. Please try again.");
            }

        } catch (error) {
            setMessageType("error");
            setStatusMessage("Server error! Make sure backend is running.");
        }

        // Hide message after 4 seconds
        setTimeout(() => setStatusMessage(null), 4000);
    };

    return (
        <section className="contact active" id="contact">
            <h2 className="heading">Contact <span>Me</span></h2>

            {/* ====================== 
                UI SUCCESS / ERROR MESSAGE
            ========================= */}
            {statusMessage && (
                <div className={`ui-message ${messageType}`}>
                    {statusMessage}
                </div>
            )}

            <div className="contact-container">

                <div className="contact-info">
                    <div className="info-box">
                        <i className='bx bx-envelope'></i>
                        <div>
                            <h4>Email</h4>
                            <p>yinebebtibebu9@gmail.com</p>
                        </div>
                    </div>

                    <div className="info-box">
                        <i className='bx bx-phone'></i>
                        <div>
                            <h4>Phone</h4>
                            <p>+251 928763013</p>
                        </div>
                    </div>

                    <div className="info-box">
                        <i className='bx bx-map'></i>
                        <div>
                            <h4>Location</h4>
                            <p>KIOT, Kombolcha, Ethiopia</p>
                        </div>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <textarea
                        name="message"
                        rows="6"
                        placeholder="Your Message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>

                    <button type="submit" className="btn">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
