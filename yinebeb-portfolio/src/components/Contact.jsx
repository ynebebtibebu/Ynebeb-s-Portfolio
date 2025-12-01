import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { placeholder, value } = e.target;
        // Map the placeholder text to the state keys
        let key;
        if (placeholder === 'Your Name') key = 'name';
        else if (placeholder === 'Your Email') key = 'email';
        else if (placeholder === 'Your Message') key = 'message';
        
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // **IMPORTANT:** You'll need to implement actual backend submission logic here.
        // For example, using the Fetch API to send data to a serverless function or an email service.
        console.log('Form Submitted:', formData); 

        alert('Message sent successfully (simulated)! Check console for data.');

        // Optionally clear the form
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="contact active" id="contact">
            <h2 className="heading">Contact <span>Me</span></h2>
            <div className="contact-container">
                <div className="contact-info">
                    {/* ... (Your info-box divs remain the same) ... */}
                    <div className="info-box">
                        <i className='bx bx-envelope'></i>
                        <div><h4>Email</h4><p>yinebebtibebu9@gmail.com</p></div>
                    </div>
                    <div className="info-box">
                        <i className='bx bx-phone'></i>
                        <div><h4>Phone</h4><p>+251 928763013</p></div>
                    </div>
                    <div className="info-box">
                        <i className='bx bx-map'></i>
                        <div><h4>Location</h4><p>KIOT, Kombolcha, Ethiopia</p></div>
                    </div>
                </div>
                
                {/* The form now uses the handleSubmit function */}
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Your Name" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input 
                        type="email" 
                        placeholder="Your Email" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <textarea 
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