import React from 'react';

const Services = () => {
    return (
        <section className="services active" id="services">
            <h2 className="heading">My <span>Services</span></h2>
            <div className="services-container">
                <div className="services-box">
                    <div className="icon">
                        <i className="bx bx-code-alt"></i>
                    </div>
                    <h3>Web Development</h3>
                    <p>I build responsive and modern websites using HTML, CSS, JavaScript, and popular frameworks like React and Tailwind CSS.</p>
                </div>
                <div className="services-box">
                    <div className="icon">
                        <i className="bx bxl-android"></i>
                    </div>
                    <h3>Mobile App Development</h3>
                    <p>I create cross-platform mobile applications using Flutter and Kotlin for fast, high-quality mobile experiences.</p>
                </div>
                <div className="services-box">
                    <div className="icon">
                        <i className="bx bxl-python"></i>
                    </div>
                    <h3>Python Automation</h3>
                    <p>I automate repetitive tasks and data pipelines using Python, including web scraping, data analysis, and scripting.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;